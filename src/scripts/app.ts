import { Control } from '../components/Control.js';
import { Footer } from '../components/Footer.js';
import { Header } from '../components/Header.js';
import { iPokamion } from '../interfaces/iPokamion.js';
import { HttpStore } from '../services/http.store.class.js';

(() => {
    document.addEventListener('DOMContentLoaded', index);
})();

function index() {
    new Header('header.header');
    new Control();
    new Footer('footer.footer');
}