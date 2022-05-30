import { iComponent } from '../interfaces/iComponent.js';
import { iPokamion } from '../interfaces/iPokamion.js';
import { Component } from './Component.js';
import { Listofpokemon } from './Listofpokemon.js';

export class List extends Component implements iComponent {
    template: string;
    constructor(selector: string, pokeArray: Array<iPokamion>) {
        super();
        this.template = this.createTemplate();
        this.render(selector); //en el main
        pokeArray.forEach((pokemon) => new Listofpokemon('slot.list-item', pokemon));
    }
    createTemplate(): string {
        return `
            <!-- cabecera lista -->
            <ul class="list">
                <slot class="list-item"></slot>
            </ul>
            <slot class="list-navbar"></slot>
            `;
    }
}