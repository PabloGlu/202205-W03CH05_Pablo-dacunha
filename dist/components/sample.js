import { Component } from './Component.js';
export class Sample extends Component {
    template;
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return ``;
    }
}
