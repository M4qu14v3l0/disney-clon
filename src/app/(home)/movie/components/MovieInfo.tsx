import { Movie } from '@/interfaces'

interface Props{
  movie: Movie
}


export const MovieInfo = ( {movie}: Props ) => {
  return (
    <>
      <h2 className="text-xl sm:text-5xl font-bold max-w-xl z-50">{movie.title}</h2>
      <p className="text-md sm:text-lg max-w-xl  z-50">{movie.overview}</p>
      <p className="text-[12px] sm:text-md opacity-50">{movie.release_date} • { movie.genres.map(genre => genre.name).join(', ')} • { movie.original_language.toUpperCase()}</p>
    </>
  )
}
