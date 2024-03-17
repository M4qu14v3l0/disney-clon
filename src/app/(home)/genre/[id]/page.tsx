import { MovieCard } from "@/components";
import { getDiscoverMovies } from "@/lib";

interface Props{
  params: { id: string };
  searchParams: { genre: string };
}

export default async function GenrePage( { params: { id } , searchParams: { genre } } :Props) {

  const movies = await getDiscoverMovies(id)

  return (
    <div className="mx-14 ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">Results for { genre } </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10 justify-center">
          {
            movies.map( movie => (
              <MovieCard movie={movie} key={movie.id}/>
            ))
          }
        </div>
    </div>
  )
}
