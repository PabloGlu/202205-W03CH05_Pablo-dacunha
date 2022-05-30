import { iComponent } from '../interfaces/iComponent.js';
import { Component } from './Component.js';

export class Navegation extends Component implements iComponent {
    template: string;
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate(): string {
        return `
        <nav class="navegation">
            <ul class="navegationlist">
                <li class="navegationitem"></li>
            <ul>
        <nav>
        `;
    }
}