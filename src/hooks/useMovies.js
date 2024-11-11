import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
export function useMovies (search, sort) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

  // para guardar la busqueda anterior
    const previousSearch = useRef(search)

    const getMovies = useCallback( async(search) => {
      if (search === previousSearch.current) return  
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)  
         } catch (error) {
        setError('Error al momento de obtener las pelicula')
        console.log('Error : ', error)
      } finally {
        setLoading(false)
      }
      
    }, [] )
    
  /*  const getMovies =useMemo( ()=> {
      return async(search) => {
      if (search === previousSearch.current) return  
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)  
         } catch (error) {
        setError('Error al momento de obtener las pelicula')
        console.log('Error : ', error)
      } finally {
        setLoading(false)
      }
      
    }}, [] )
  */
    // ordenar por el nombre usando useMemo 
    const sortedMovies = useMemo(() => {
      return sort 
      ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
      : movies 
    }, [sort, movies])
   return {movies: sortedMovies, getMovies, loading, errorMovies: error}
  }