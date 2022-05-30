import { Component } from './Component.js';
import { Listofpokemon } from './Listofpokemon.js';
export class List extends Component {
    template;
    constructor(selector, pokeArray) {
        super();
        this.template = this.createTemplate();
        this.render(selector); //en el main
        pokeArray.forEach((pokemon) => new Listofpokemon('slot.list-item', pokemon));
    }
    createTemplate() {
        return `
            <!-- cabecera lista -->
            <ul class="list">
                <slot class="list-item"></slot>
            </ul>
            <slot class="list-navbar"></slot>
            `;
    }
}
