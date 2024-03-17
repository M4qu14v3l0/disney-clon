'use client'


import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

import { Movie } from "@/interfaces";
import { getImagePath } from "@/lib";




Autoplay.globalOptions = { delay: 8000 }

export const CarouselsBanner = ( {movies}: { movies: Movie[]}) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration:100}, [Autoplay()])

  return (
    <div className="relative max-h-[760px] cursor-pointer overflow-hidden -z-10 -mt-20" ref={emblaRef}>
      <div className="flex">
        {
          movies.map( movie => (
            <div key={movie.id} className="flex-full min-w-0 relative object-cover z-[-2]">
              <Image
                key={movie.id}
                src={getImagePath(movie.backdrop_path, true)}
                alt={movie.title}
                width={3440}
                height={1080}
              />  
              <div className="h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent bg-transparent inline absolute mt-0 top-0 pt-16 sm:pt-40 xl:pt-52 left-0  p-10 space-y-5  z-50">
                <div className="mt-40 sm:mt-24 z-50">
                  <h2 className="text-xl sm:text-5xl font-bold max-w-xl z-50">{movie.title}</h2>
                  <p className="text-xs sm:text-lg max-w-xl line-clamp-3 z-50">{movie.overview}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-white dark:to-[#1A1C29] -z-10"/>
              </div>
            </div>
          ))
        }
      </div>

    </div>

  )
}
