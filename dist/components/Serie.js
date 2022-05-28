import { Button } from './Button.js';
import { Component } from './Component.js';
import { Score } from './Score.js';
export class Serie extends Component {
    serie;
    template;
    constructor(serie, selector) {
        super();
        this.serie = serie;
        this.template = this.createTemplate();
        this.addRender(selector);
        new Score(this.serie, `slot.score${this.serie.id}`);
        new Button(this.serie.id, 'slot.delete-button', '<i class="fas fa-times-circle icon--delete"></i>', 'delete');
    }
    createTemplate() {
        return `
        <li class="serie">
                <img
                  class="serie__poster"
                  src="${this.serie.poster}"
                  alt="${this.serie.name} poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
                    <slot class="score${this.serie.id}"></slot>
                <slot class="delete-button">
              </li>`;
    }
}
