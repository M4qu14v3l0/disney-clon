import Image from "next/image"

import { getImagePath } from "@/lib"
import { Movie } from "@/interfaces"

import Link from "next/link";


export const MovieCard = ( { movie }: { movie : Movie }) => {
  return (
    <div className="relative py-8 px-4 h-fit flex-shrink-0 cursor-pointer keen-slider__slide">
      <Link href={`/movie/${movie.id}`}>
        <Image 
          className="w-fit h-full object-contain object-center rounded-sm transform hover:scale-105 transition duration-300 ease-out shadow-3xl"
          src={getImagePath(movie.poster_path || movie.backdrop_path)}
          alt={movie.title}
          width={1920}
          height={1080}
          key={movie.id}
        />
      </Link>
    </div>
  )
}
