import { Component } from './Component.js';
export class Navegation extends Component {
    template;
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return `
        <nav class="navegation">
            <ul class="navegationlist">
                <li class="navegationitem"></li>
            <ul>
        <nav>
        `;
    }
}
