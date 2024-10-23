import { useState } from 'react'
import  responseMovies  from './mocks/with-results.json'
import './App.css'

function App() {
  
  const movies = responseMovies.Search 
  const hasMovies = movies?.length > 0

  return (
    <>
     
     <header>
     <h1>App de peliculas</h1>
      <form className='form'>
          <input type="text" placeholder='Avenger, star wars' />
          <button type='submit'>Buscar</button>
      </form>
     </header>
     <main>
        {
          hasMovies ? (
            <ul>
              {
                movies.map( movie => (
                  <li key= {movie.immbID}>
                    <h3>{movie.Title}</h3>  
                    <p>{movie.Year}</p>  
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
          ): (
            <h2> No existen peliculas</h2>
          )
        }
     </main>
    </>
  )
}

export default App
