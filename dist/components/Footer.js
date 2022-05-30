import { Component } from './Component.js';
export class Footer extends Component {
    template;
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        return `
        <footer class="footer">
            <address class="footeraddress">
                ISDI Coders
            </address>
        </footer>
        `;
    }
}
