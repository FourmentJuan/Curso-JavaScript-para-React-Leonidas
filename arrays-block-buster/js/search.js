import movies from "./movies.js"
import render from "./render.js"
const search = window['search-form']

search.addEventListener('submit',function(event){
  event.preventDefault()//Previene que se recargue la página
  const formDate = new FormData(this)
  const title = formDate.get('title')
  const movies = filterByTitle(title)
  render(movies)
})

function filterByTitle(title){
  return movies.filter((movie) =>{
    return movie.title.toLowerCase().includes(title.toLowerCase())
  })
}