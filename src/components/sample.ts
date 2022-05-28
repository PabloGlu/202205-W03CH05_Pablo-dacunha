import { iComponent, iPokamion } from '../interfaces/iPokamion.js';
import { Component } from './Component.js';

export class Sample extends Component implements iComponent {
    template: string;
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate(): string {
        return ``;
    }
}
