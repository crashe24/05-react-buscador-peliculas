//import { useEffect, useRef, useState } from 'react'
import { useCallback, useState } from 'react'
import './App.css'
import { MainMovies } from './components/MainMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'


function App() {
  // para el uso de useMemo y useCallBack
  const [sort, setSort ] = useState(false)

  const {query, error, updateSearch} = useSearch()
  const {movies, getMovies, loading, errorMovies} = useMovies(query, sort)
  
  const debouncedGetMovies = useCallback(debounce( search => {getMovies(search)},500 ), [getMovies])
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(query)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  // debounce o busqueda cada ves que ingrese un search tiempo de espera 
  // instalar librerias
  // npm i just-debounce-it -E
  const handleChange = (event) => {
    const newSearch = event.target.value 
    updateSearch(newSearch)
    //getMovies({ search: newSearch}) sin debounce
    debouncedGetMovies(newSearch)
  }
  
  /*const handleChange = (event) => {
    setQuery(event.target.value)
  }*/

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
