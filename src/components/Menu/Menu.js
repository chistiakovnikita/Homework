import { Component } from "../../core";
import "../../components/Menu/Menu.scss"

export class Menu extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: false,
        }
    }


    toggleMenu = () => {
        this.setState((state) => {
            return {
                ...state,
                isVisible: !state.isVisible,
            }
        })
    }


    onClick = (evt) => {
        const target = evt.target
        if(target.closest('.btn')) {
           this.toggleMenu()
        }
        if(target.closest('.menu-btn')) {
            this.toggleMenu()
        }
       
    }


    componentDidMount() {
        window.addEventListener('click', this.onClick)
        
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClick)
    }

    render() {
        return `
         
            ${
                this.state.isVisible 
                ? ` <div class="menu">
                        <ul>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                        <button type="button" class="menu-btn">X</button>
                    </div>` 
                : ''}
            `
    }
}


customElements.define('my-menu', Menu)