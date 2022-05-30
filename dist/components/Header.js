import { Component } from './Component.js';
export class Header extends Component {
    template;
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        return `
        <header class="header">
            <h1 class="header__title">Pokeapp</h1>
            <slot class="headernavigation"></slot>
        </header>
        `;
    }
}
