import { iPokamion } from '../interfaces/iPokamion';
import { HttpStore } from '../services/http.store.class.js';
import { List } from './List.js';

export class Control {
    startIndex: number;
    constructor() {
        const pokeApi = new HttpStore('https://pokeapi.co/api/v2/pokemon/');
        const promises: Array<Promise<iPokamion>> = [];
        this.startIndex = 131;
        for (let i = this.startIndex; i < this.startIndex + 20; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => new List('main.main', values));
    }
}
