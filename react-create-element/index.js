import { render} from './react-dom.js'
import {App} from './components/app.js'

const container = document.querySelector('#root')

render(
  new App(),
  container
);