import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleCharacter } from 'src/app/interface/single-character.interface';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  //variables e inicializaciones
  pageSize: number = 20
  page = 1
  @Input() characters: SingleCharacter[] = [];
  @Input() maxCharacters: number = 0;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();



  /**
   * A description of the entire function.
   *
   * @param {PageEvent} event - description of parameter
   * @return {void} description of return value
   */
  onPageChange(event: PageEvent) {
    this.pageChanged.emit(event.pageIndex + 1);
  }
}

