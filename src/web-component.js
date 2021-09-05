import { createElement } from 'lwc';
import MyApp from 'my/app';

class MessageCenter extends HTMLElement {
    connectedCallback() {
        const app = createElement('my-app', { is: MyApp });
        this.appendChild(app);
    }
}
customElements.define('message-center', MessageCenter);
