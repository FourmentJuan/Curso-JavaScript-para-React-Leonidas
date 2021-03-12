import { Component,createElement } from '../lib/react/index.js'
import User from './user.js'
import Wrapper from './wrapper.js'
import UserStyled from './user-styled.js'

export class App extends Component{

  render(){
    return createElement("div", {
      class: "app",
      children: new Wrapper({
        children: [
          new User({
            name: "Ash",
            avatar: "./images/ash.jpg",
            age:10
          }),
          new UserStyled({
            name: 'Ash',
            avatar: './images/ash.jpg',
            age: 10,
          })
        ],
      }),
    });
  }

}

