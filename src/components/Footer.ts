import { iComponent } from '../interfaces/iComponent.js';
import { Component } from './Component.js';

export class Footer extends Component implements iComponent {
    template: string;
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate(): string {
        return `
        <footer class="footer">
            <address class="footeraddress">
                ISDI Coders
            </address>
        </footer>
        `;
    }
}