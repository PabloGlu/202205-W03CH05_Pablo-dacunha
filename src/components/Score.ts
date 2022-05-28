import { iComponent, iPokamion } from '../interfaces/iPokamion.js';
import { Button } from './Button.js';
import { Component } from './Component.js';

export class Score extends Component implements iComponent {
    template: string;
    serieId: number;
    constructor(public item: iPokamion, selector: string) {
        super();
        this.serieId = Number(selector[selector.length - 1]);
        this.template = this.createTemplate();
        this.render(selector);
        for (let i = 1; i <= this.item.score; i++) {
            new Button(
                this.item.id,
                'slot.fas',
                `<i class="icon--score fas fa-star" title="${i}/5"></i>`,
                'score'
            );
        }
        for (let j = this.item.score + 1; j <= 5; j++) {
            new Button(
                this.item.id,
                'slot.far',
                `<i class="icon--score far fa-star" title="${j}/5"></i>`,
                'score'
            );
        }
    }
    createTemplate(): string {
        let html = '';
        for (let i = 1; i <= this.item.score; i++) {
            html += `<li class="score__star">
                <slot class="fas"></slot></li>`;
        }
        for (let j = this.item.score + 1; j <= 5; j++) {
            html += `<li class="score__star">
                <slot class="far"></slot></li>`;
        }
        return `
            <ul class="score">
                ${html}
            </ul>
        `;
    }
}
