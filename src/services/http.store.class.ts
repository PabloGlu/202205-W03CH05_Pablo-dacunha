import { iPokamion } from '../interfaces/iPokamion.js';

export class HttpStore {
    constructor(public url: string) {}
    getPokemon(pokemonID: number): Promise<iPokamion> {
        return fetch(this.url + pokemonID).then((response) => {
            return response.json();
        });
    }
}