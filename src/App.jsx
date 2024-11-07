//import { useEffect, useRef, useState } from 'react'
import './App.css'
import { MainMovies } from './components/MainMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'



function App() {
  const {query, error, setQuery} = useSearch()
  const {movies, getMovies} = useMovies(query)
  
  
  //const inputRef = useRef()
  //const [query, setQuery] = useState('')
  //const [error, setError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
    getMovies()
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  /**forma controlada */
 /* useEffect( () =>{
    if (query === '') {
      setError('Debe ingresar un nombre de la pelicula')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('No puede comenzar con un digito')
      return
    }
    if (query.length<3) {
      setError('Debe contener mas de 3 letras')
      return
    }
    setError(null)
  },[query])*/
  /** forma no controlada */
  /*const handleSubmit2 = (event) => {
    event.preventDefault()
    const {query} = Object.entries(new window.FormData(event.target))
    console.log(query)
  }
    */
  return (
    <>
     
     <header>
     <h1>App de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
          {/*<input ref={inputRef} type="text" placeholder='Avenger, star wars' />*/}
          <input type="text" onChange={handleChange} value={query}  placeholder='Avenger, star wars' />
          <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
     </header>
     <main>
       <MainMovies movies={movies} />
     </main>
    </>
  )
}

export default App
