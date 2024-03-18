import { GridMovies, MovieCard } from "@/components";
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
        <GridMovies movies={movies}/>
    </div>
  )
}
