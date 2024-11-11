import { useEffect, useRef, useState } from 'react'

export function useSearch() {
    const [query, setQuery] = useState('')
    const [error, setError] = useState()
    // useRef para validar la primera ves del imput vacio
    const isFirstInput = useRef(true)
    /**forma controlada */
    useEffect( () =>{
      if (isFirstInput.current) {
        isFirstInput.current = query === ''
        return 
      }
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
    },[query])
  
    const updateSearch = (search ) => {
      setQuery(search)
    }

    return {query , error, updateSearch }
  }