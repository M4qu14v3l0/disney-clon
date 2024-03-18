'use client'

import { useFavoriteStore } from "@/store";
import { GridMovies, MovieCard } from "@/components";
import { WithoutFavorites } from "./components/WithoutFavorites";

export default function Favorites() {

  const { favorites } = useFavoriteStore()
  
  return (
    <main className="px-14">
      {
        favorites.length === 0
        ? 
          <WithoutFavorites />
        :
        <>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">My Favorites </h1>
          <GridMovies movies={favorites}/>
        </>
      }
    </main>
  )
}
