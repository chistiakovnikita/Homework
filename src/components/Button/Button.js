import { Component } from "../../core";
import "../../components/Button/Button.scss"



export class Button extends Component {

static get observedAttributes() {
    return ['type']
}

    render() {
        return `
            <button type="button" class="btn">Menu</button>
            
        `
    }
}

customElements.define('my-button', Button)