import responseMovies from '../mocks/with-results.json'
export function useMovies () {
    const moviesRef = responseMovies.Search 
    const mappedMovies = moviesRef?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return {movies: mappedMovies}
  }