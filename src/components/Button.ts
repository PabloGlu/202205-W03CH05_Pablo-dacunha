import { iComponent, iPokamion } from '../interfaces/iPokamion.js';
import { Component } from './Component.js';

export class Button extends Component implements iComponent {
    template: string;
    constructor(
        public id: number,
        selector: string,
        public content: string,
        public buttonType: string
    ) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate(): string {
        if (this.buttonType === 'delete') {
            return `
            <div class="${this.buttonType}-button" data-id="del-${this.id}">${this.content}</div>`;
        }
        if (this.buttonType === 'score') {
            return `<div class="${this.buttonType}-button" data-id="sco-${this.id}">${this.content}</div>`;
        }
        return '';
    }
}
