//import { useEffect, useRef, useState } from 'react'
import { useState } from 'react'
import './App.css'
import { MainMovies } from './components/MainMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'



function App() {
  // para el uso de useMemo y useCallBack
  const [sort, setSort ] = useState(false)

  const {query, error, setQuery} = useSearch()
  const {movies, getMovies, loading, errorMovies} = useMovies(query, sort)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
    getMovies(query)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <>
     
     <header>
     <h1>App de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
          {/*<input ref={inputRef} type="text" placeholder='Avenger, star wars' />*/}
          <input type="text" onChange={handleChange} value={query}  placeholder='Avenger, star wars' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
     </header>
     <main>
      {loading ? (<p>Cargando...</p>): (<MainMovies movies={movies} />)}
       
     </main>
    </>
  )
}

export default App
