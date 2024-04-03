import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SingleCharacter } from 'src/app/interface/single-character.interface';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //variables e inicializaciones
  pageNumber: number = 1
  page: number = this.pageNumber
  pageSize: number = 20
  maxCharacters: number = 50
  getCharactersList = false
  characters: SingleCharacter[] = [];

  constructor(
    private api: ApiService
  ) {
    this.loadCharacters(this.page)
  }


  /**
   * A description of the entire function.
   *
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
  getCharacters() {
    this.getCharactersList = true
    this.loadCharacters(this.page)
  }
  /**
   * Load characters from the API based on the given page number.
   *
   * @param {number} page - The page number to load characters from.
   */
  loadCharacters(page: number) {
    this.api.getAllCharacters(page)
      .subscribe((data: any) => {
        this.characters = data.results;
        console.log('characters HomeComponent', this.characters);
        this.maxCharacters = data.info.count
      })
  }

  /**
   * A description of the entire function.
   *
   * @param {number} pageIndex - description of parameter
   * @return {void} description of return value
   */
  onPageChange(pageIndex: number) {
    console.log('onPageChange', pageIndex);
    this.loadCharacters(pageIndex);
  }

}




