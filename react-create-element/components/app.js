import { Component,createElement } from '../lib/react/index.js'
import User from './user.js'
import Wrapper from './wrapper.js'
//import UserStyled from './user-styled.js'

const element = createElement(
  'div',{
    class: 'app',
    children: [createElement('h1',{},'hola')]
  })

console.log(element)

export class App extends Component{

  render(){
    return createElement('div',{
      class: 'app',
      children: new Wrapper({
        children:[
          new User({
            name: 'Ash',
            avatar: './images/ash.jpg'
          })
        ],
      })
    })
    /*`
      <div class="app">
        ${new Wrapper({
          children: `
              <h1>React.js ⭐⭐⭐⭐⭐ 😄</h1>
              ${new User({
                name: "Ash",
                avatar: "./images/ash.jpg",
              }).render()}
              ${new UserStyled({
                name: "Ash",
                avatar: "./images/ash.jpg",
              }).render()}
            `,
        }).render()}
      </div>
    `;*/
  }

}

