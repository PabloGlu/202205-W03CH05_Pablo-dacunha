import { series } from '../models/series.model.js';
const store = 'Series';
export function getData() {
    return localStorage.getItem(store)
        ? JSON.parse(localStorage.getItem(store))
        : series;
}
export function setData(array) {
    localStorage.setItem(store, JSON.stringify(array));
}
export function deleteData() {
    localStorage.removeItem(store);
}
