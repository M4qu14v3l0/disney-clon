import { Movie } from "@/interfaces";


async function fetchFromTMDB( url: URL, cacheTime?: number){
  url.searchParams.set("language", "en-US");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    },
    next:{
      revalidate: cacheTime || 60 * 60 * 24
    }
  };

  const response = await fetch(url.toString(), options);
  const data = ( await response.json() ) as Movie;

  return data
}

export async function getMovieDataById(id: string){
  const url = new URL(`https://api.themoviedb.org/3/movie/${id}`)
  const data = await fetchFromTMDB(url)

  return data
}