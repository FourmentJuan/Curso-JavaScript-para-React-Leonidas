import {
  renderMovieListFromMap
} from './render.js'

import{
  movieList,
  all,
  popular as mostValued,
  notpopular as leastValued
}from './normalize.js'

filter.addEventListener('change',function() {
  switch (this.value) {
    case 'most-valued':
      return renderMovieListFromMap(mostValued,movieList);
    case 'least-value':
     return renderMovieListFromMap(leastValued,movieList);
    default:
      return renderMovieListFromMap(all,movieList);
  }
})