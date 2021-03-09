import { Component,createElement} from '../lib/react/index.js'


class User extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    console.log(this.props.name)
  }
 /* handleClick = (event) =>{
    console.log(this.props.name);
  }*/
  render(){
    const {avatar,name} = this.props
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
        createElement("h2", null, name),
      ],
    });
  }
}



export default User