import { ListMovies } from "./ListMovies"
import { NoFoundMovies } from "./NoFoundMovies"

export function MainMovies ({movies}) {
    const hasMovies = movies?.length > 0
    return (
        <>
        
        {
            hasMovies ? (
                <ListMovies movies={movies}/>
              ): (
                <NoFoundMovies />
              )
        }
        </>
    )
}