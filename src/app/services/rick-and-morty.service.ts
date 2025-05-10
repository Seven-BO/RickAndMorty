import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(page = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/character?page=${page}`);
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  getLocations(page = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/location?page=${page}`);
  }

  getLocationById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/${id}`);
  }

  getEpisodes(page = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode?page=${page}`);
  }

  getEpisodeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode/${id}`);
  }
}