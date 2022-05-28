export abstract class Component {
    template!: string;
    render(selector: string) {
        if (document.querySelector(selector) !== null) {
            (<Element>document.querySelector(selector)).innerHTML =
                this.template;
        } else {
            console.log('Error: Bad selector');
        }
    }
    addRender(selector: string) {
        if (document.querySelector(selector) !== null) {
            (<Element>document.querySelector(selector)).innerHTML +=
                this.template;
        } else {
            console.log('Error: Bad selector');
        }
    }
    outRender(selector: string) {
        if (document.querySelector(selector) !== null) {
            (<Element>document.querySelector(selector)).outerHTML =
                this.template;
        } else {
            console.log('Error: Bad selector');
        }
    }
}
