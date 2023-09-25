import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //Conexión al api de pokemon (igualmente se puede agregar desde el environment)
  private baseUrlApi = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  //consulta mediante id para un solo pokemon
  getPokemons(index: any) {
    return this.http.get<any>(`${this.baseUrlApi}/pokemon/${index}`);

  }

  //consulta para traer todos los pokemones disponibles de la api
  getPokemonsFull() {
    return this.http.get<any>(`${this.baseUrlApi}/pokemon?limit=100000&offset=0/`);

  }
}
