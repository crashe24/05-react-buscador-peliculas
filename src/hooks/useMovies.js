import { useState } from 'react'
import withResult from '../mocks/with-results.json'
import notResultMovies from '../mocks/no-results.json'
export function useMovies (search) {

    const [responseMovies, setResponseMovies] = useState([])
    
    const moviesRef = responseMovies.Search 
    const mappedMovies = moviesRef?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    const getMovies = ()=> {
       if (search) {
        //setResponseMovies(withResult)
        fetch(`https://www.omdbapi.com/?apikey=421251e&s=${search}`)
        .then(res => res.json())
        .then(json => setResponseMovies(json))
      }  else {
        setResponseMovies(notResultMovies)
      }
    }
    return {movies: mappedMovies, getMovies}
  }