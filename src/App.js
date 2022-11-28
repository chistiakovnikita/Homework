import { Component } from './core'
import "./components/Button/Button"
import "./components/Menu/Menu"


export class App extends Component {

    render() {
      return ( 
        `
        
        <my-menu></my-menu>
        <my-button></my-button>
        `
        
      )
    }
  }
  
  customElements.define("my-app", App);
  