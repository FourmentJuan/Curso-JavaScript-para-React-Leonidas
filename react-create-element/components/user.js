import { Component,createElement} from '../lib/react/index.js'


class User extends Component {
  state = {
    age: this.props.age
  }
  /*constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    //console.log(this.props.name)
    this.setState()
  }*/
 handleClick = (event) =>{
    this.setState({
      age:this.state.age + 1
    })
  }
  render(){
    const {avatar,name} = this.props
    const {age} = this.state
    return createElement("div", {
      onClick: this.handleClick,
      class: "user",
      children: [
        createElement("div", {
          class: "avatar",
          children: createElement("img", {
            src: avatar,
          }),
        }),
        createElement("h2", null,`Hola soy ${name} y tengo ${age}`),
      ],
    });
  }
}



export default User