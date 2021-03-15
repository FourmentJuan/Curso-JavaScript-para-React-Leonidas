import {Component, createElement} from '../lib/react/index.js'
import Select from './select.js'

class Filters extends Component{

  render(){
    return Select({
      children: [ createElement("option", { value: 'all' }, "Todas"),
                  createElement("option", { value: 'mostValued' }, "Las más valoradas"),
                  createElement("option", { value: 'leastValued' }, "Las menos valoradas")]
    })
  }
}

export default Filters