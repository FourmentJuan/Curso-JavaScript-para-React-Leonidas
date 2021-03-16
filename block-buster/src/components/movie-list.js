import { Component, createElement} from '../lib/react/index.js'
import styled from '../lib/styled-component.js'
import Wrapper from './wrapper.js'
import Movie from './movie.js'
import store from '../store.js'
import api from '../api.js'
import {ADD_MOVIES} from '../actions/index.js'
//import movies from '../movies.js'


const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`

class MovieList extends Component{
  state = {
    page:1
  }

  getPage = async (page) => {
    const {results} = await api.moviePage(10)
    store.dispatch({
      type: ADD_MOVIES,
      payload:results
    })
  }
  async componentDidMount(){
    this.getPage(this.state.page)
    store.subscribe(()=>{
      this.setState()
    })
  }
  render(){
    const state = store.getState()
    const movieListId = state.list[state.filter]
    const movieList = state.movieList
    return Wrapper({
      children: MovieListStyled({
        children: movieListId.map((id) => new Movie(movieList.get(id))),
      }),
    });
  }
}

export default MovieList