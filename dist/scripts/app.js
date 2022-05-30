import { Control } from '../components/Control.js';
import { Footer } from '../components/Footer.js';
import { Header } from '../components/Header.js';
(() => {
    document.addEventListener('DOMContentLoaded', index);
})();
function index() {
    new Header('header.header');
    new Control();
    new Footer('footer.footer');
}
