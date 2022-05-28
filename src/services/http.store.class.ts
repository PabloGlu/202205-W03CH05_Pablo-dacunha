import { PokemonModel } from '../models/pokemon.model.js';

export class HttpStoreClass {
    url: string;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.';
    }
    getPokemons(): Promise<Array<PokemonModel>> {
        // GET
        return fetch(this.url).then((resp) => {
            console.log(resp.status);
            return resp.json();
        });
    }
    getPokemon(pokemon: PokemonModel): Promise<PokemonModel> {
        // GET
        return fetch(this.url + `/${pokemon.id}`).then((resp) => resp.json());
    }
    setPokemon(pokemon: PokemonModel): Promise<PokemonModel> {
        // POST
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(pokemon),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    updatePokemon(pokemon: PokemonModel): Promise<PokemonModel> {
        // PUT / PATCH
        return fetch(this.url + `/${pokemon.id}`, {
            method: 'PATCH',
            body: JSON.stringify(pokemon),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    deletePokemon(id: string): Promise<number> {
        // DELETE
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        }).then((response) => response.status);
    }
}