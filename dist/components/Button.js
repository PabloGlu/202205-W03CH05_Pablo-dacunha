import { Component } from './Component.js';
export class Button extends Component {
    id;
    content;
    buttonType;
    template;
    constructor(id, selector, content, buttonType) {
        super();
        this.id = id;
        this.content = content;
        this.buttonType = buttonType;
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
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
