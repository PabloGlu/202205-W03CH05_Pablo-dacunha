import { iSerie as myInterface } from '../interfaces/iComponent.js';
import { series } from '../models/series.model.js';

const store = 'Series';

export function getData(): Array<myInterface> {
    return localStorage.getItem(store)
        ? JSON.parse(<string>localStorage.getItem(store))
        : series;
}

export function setData(array: Array<myInterface>) {
    localStorage.setItem(store, JSON.stringify(array));
}

export function deleteData() {
    localStorage.removeItem(store);
}
