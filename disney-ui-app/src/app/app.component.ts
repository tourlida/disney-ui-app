import { Component, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';

export interface Character {
  films: any[];
  shortFilms: any[];
  tvShows: any[];
  videoGames: any[];
  parkAttractions: any[];
  allies: any[];
  _id: number;
  name: string;
  imageUrl: string;
  url: string;
}

export interface CharactersServiceRsp {
  data: Character[];
  count: number;
  previousPage: string;
  nextPage: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  title: string = 'disney-ui-app';

  constructor(private service: CharactersService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      console.log('response->', response);
      this.characters = (response as CharactersServiceRsp).data;
      console.log(' this.characters->', this.characters);
    });
  }
}
