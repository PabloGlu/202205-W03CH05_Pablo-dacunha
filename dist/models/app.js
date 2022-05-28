import { List } from '../components/List';
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
function app() {
    new List('section.series');
}
