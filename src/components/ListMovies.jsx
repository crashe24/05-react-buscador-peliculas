export function ListMovies ({movies}) {
    return (
      <ul className="moviesCss">
      {
        movies.map( movie => (
          <li className="movieCss" key= {movie.id}>
            <h3>{movie.title}</h3>  
            <p>{movie.year}</p>  
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
    )
  }