import { MovieCard } from '../Card/MovieCard'
import { Movie } from '@/interfaces'


interface Props {
  movies: Movie[]
}

export const GridMovies = ( { movies } : Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 justify-center">
    {
      movies.map( movie => (
        <MovieCard movie={movie} key={movie.id}/>
      ))
    }
  </div>
  )
}
