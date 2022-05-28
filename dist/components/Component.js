export class Component {
    template;
    render(selector) {
        if (document.querySelector(selector) !== null) {
            document.querySelector(selector).innerHTML =
                this.template;
        }
        else {
            console.log('Error: Bad selector');
        }
    }
    addRender(selector) {
        if (document.querySelector(selector) !== null) {
            document.querySelector(selector).innerHTML +=
                this.template;
        }
        else {
            console.log('Error: Bad selector');
        }
    }
    outRender(selector) {
        if (document.querySelector(selector) !== null) {
            document.querySelector(selector).outerHTML =
                this.template;
        }
        else {
            console.log('Error: Bad selector');
        }
    }
}
