'use client'

import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons"
import { useFavoriteStore } from "@/store"

import { Movie } from "@/interfaces"

interface Props{
  movie: Movie
}



export const MyFavorite = ( {movie}: Props ) => {

  const { addFavorite, favorites } = useFavoriteStore()

  const isFavorite = favorites.some(id => id.id === movie.id)

  return (
    <>
    <div className="flex gap-2 items-center">
      {
        isFavorite ? <HeartFilledIcon className="text-red-500 h-6 w-6 sm:h-10 sm:w-10 cursor-pointer z-50" onClick={() => addFavorite(movie)}/> : <HeartFilledIcon className="text-gray-500 h-6 w-6 sm:h-10 sm:w-10 cursor-pointer z-50" onClick={() => addFavorite(movie)}/>
      }
      {
        isFavorite ? <p>Is Favorite</p> : <p>Not Favorite</p>
      }
    </div>
    </>
  )
}



