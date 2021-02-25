import movies from "./movies.js"
import render from "./render.js"
const search = window['search-form']

search.addEventListener('submit',function(event){
  event.preventDefault()//Previene que se recargue la página
  const formDate = new FormData(this)
  const query= formDate.get('title')
  //const movies = filterByTitle(title)
  const movies = searchMovie(query)
  if(movies) {
    return render(movies)
  }
  return alert('No encontramos tu película')
})

function filterByTitle(title){
  return movies.filter((movie) =>{
    return movie.title.toLowerCase().includes(title.toLowerCase())
  })
}

function findById(id){
  return movies.find((movie)=>{
    return movie.id === parseInt(id,10)
  })
}

function searchMovie(query){
  if (isNaN(query)){
    return filterByTitle(query)
  }
  return [findById(query)]
}