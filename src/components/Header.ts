import { iComponent } from '../interfaces/iComponent.js';
import { Component } from './Component.js';

export class Header extends Component implements iComponent {
    template: string;
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate(): string {
        return `
        <header class="header">
            <h1 class="header__title">Pokeapp</h1>
            <slot class="headernavigation"></slot>
        </header>
        `;
    }
}