import { Component } from './Component.js';
import * as seriesStore from '../services/store.js';
import { Serie } from './Serie.js';
export class List extends Component {
    selector;
    template;
    seriesList;
    constructor(selector) {
        super();
        this.selector = selector;
        this.seriesList = seriesStore.getData();
        this.template = this.createTemplate();
        this.render(this.selector);
        this.seriesList.forEach((item) => item.watched
            ? new Serie(item, 'slot.watched')
            : new Serie(item, 'slot.pending'));
        setTimeout(() => this.manageComponent(), 0);
    }
    createTemplate() {
        let pendingSeries = this.seriesList.filter((item) => !item.watched).length;
        let watchedSeries = this.seriesList.filter((item) => item.watched).length;
        return `
        <section class="series">
          <h2 class="section-title">Series list</h2>
            <section class="series-pending">
                <h3 class="subsection-title">Pending series</h3>
                <p class="info">You have ${pendingSeries} series pending to watch</p>
                ${pendingSeries === 0
            ? `<p class="info">Congrats! You've watched all your series</p>`
            : ''}
                <ul class="series-list">
                    <slot class="pending"></slot>
                </ul>
            </section>
            <section class="series-watched">
                <h3 class="subsection-title">Watched series</h3>
                <p class="info">You have watched ${watchedSeries} series</p>
                ${watchedSeries === 0
            ? `<p class="info">You already have not watched any serie</p>`
            : ''}
                <ul class="series-list series-list--watched">
                    <slot class="watched"></slot>
                </ul>
            </section>
        </section>`;
    }
    manageComponent() {
        document
            .querySelectorAll('.delete-button')
            .forEach((item) => item.addEventListener('click', this.handlerClick.bind(this)));
        document
            .querySelectorAll('.score-button')
            .forEach((item) => item.addEventListener('click', this.handlerClick.bind(this)));
    }
    handlerClick(event) {
        const buttonID = String(event.target.parentElement.dataset.id);
        if (buttonID.substring(0, 3) === 'del') {
            const deleteID = Number(buttonID[4]);
            this.seriesList = this.seriesList.filter((item) => item.id !== deleteID);
        }
        if (buttonID.substring(0, 3) === 'sco') {
            const serieID = Number(buttonID[4]);
            const starID = event.target.title[0];
            this.seriesList = this.seriesList.map((item) => {
                if (item.id === serieID) {
                    item.score = Number(starID);
                    item.watched = true;
                    return item;
                }
                else {
                    return item;
                }
            });
        }
        // seriesStore.setData(this.seriesList);
        this.updateComponent();
    }
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.seriesList.forEach((item) => item.watched
            ? new Serie(item, 'slot.watched')
            : new Serie(item, 'slot.pending'));
        setTimeout(() => this.manageComponent(), 0);
    }
}
