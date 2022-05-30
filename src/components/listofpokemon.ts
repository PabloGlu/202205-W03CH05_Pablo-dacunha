import { iComponent } from '../interfaces/iComponent.js';
import { iPokamion } from '../interfaces/iPokamion.js';
import { Component } from './Component.js';

export class Listofpokemon extends Component implements iComponent {
    template: string;
    constructor(selector: string, public pokemon: iPokamion) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate(): string {
        return `
            <li class="list-item">
                <img src="${this.pokemon.sprites.front_default}" alt="avatar" class="list-item__avatar" />
                <span class="id">${this.pokemon.id}</span>
                <span class="name">${this.pokemon.name}</span>
            </li>`;
    }
}