import { Component } from './Component.js';
export class Listofpokemon extends Component {
    pokemon;
    template;
    constructor(selector, pokemon) {
        super();
        this.pokemon = pokemon;
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        return `
            <li class="list-item">
                <img src="${this.pokemon.sprites.front_default}" alt="avatar" class="list-item__avatar" />
                <span class="id">${this.pokemon.id}</span>
                <span class="name">${this.pokemon.name}</span>
            </li>`;
    }
}
