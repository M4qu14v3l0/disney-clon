import { StarFilledIcon } from "@radix-ui/react-icons"

import { Movie } from "@/interfaces"

interface Props{
  movie: Movie
}

export const PopularityData = ( {movie}: Props ) => {
  return (
    <div className="flex items-center gap-2 w-[220px]">
      <StarFilledIcon className="text-yellow-500 h-6 w-6 sm:h-10 sm:w-10 "/>
      <div className="text-xs sm:text-lg max-w-xl line-clamp-3 z-50 flex items-start justify-start flex-col ">
        <p className="text-lg sm:text-[22px] font-bold max-w-xl line-clamp-3 z-50">{movie.vote_average}<span className="text-lg opacity-50"> / 10</span></p>
        <p className="text-sm">{Math.round(movie.popularity)}k</p>
      </div>
    </div>
  )
}
