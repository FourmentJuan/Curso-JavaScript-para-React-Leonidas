import { Component, createElement} from '../lib/react/index.js'
import styled from '../lib/styled-component.js'
import Wrapper from './wrapper.js'
import Movie from './movie.js'
import movies from '../movies.js'
/*<div class="wrapper">
    <section class="movie-list" id="container">
      <article class="movie recommended">
        <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg" alt="">
        <p class="movie-title">Duro de matar</p>
        <p class="movie-id">123456</p>
        <span class="movie-rate">10</span>
      </article>
    </section>
  </div> --></div>*/

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`

class MovieList extends Component{
  render(){
    return  Wrapper({
      children: MovieListStyled({
        children:movies.map(movie => new Movie(movie))
      })
    })
  }
}

export default MovieList