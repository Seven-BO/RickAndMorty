import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<any> {
  constructor(private rickAndMortyService: RickAndMortyService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.rickAndMortyService.getCharacterById(id!);
  }
}