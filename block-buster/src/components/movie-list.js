import { Component, createElement} from '../lib/react/index.js'
import styled from '../lib/styled-component.js'
import Wrapper from './wrapper.js'
import Movie from './movie.js'
import store from '../store.js'
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
    movies:store.getState().movieList
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