import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickAndMortyService.getCharacters(this.currentPage).subscribe(data => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.loadCharacters();
  }
}
