import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient) { }


getJSONDataFromGithub() {
  return this.http.get<any>('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
}
}

 
