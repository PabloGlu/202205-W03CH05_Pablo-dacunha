import { List } from '../components/List.js';
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
function app() {
    new List('section.series');
}
