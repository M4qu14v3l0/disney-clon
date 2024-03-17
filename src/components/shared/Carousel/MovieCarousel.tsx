'use client'

import { useState } from 'react';

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module


import { Movie } from "@/interfaces";
import { MovieCard } from "../Card/MovieCard";

interface Props{
  title?: string;
  movies: Movie[];
}

export const MovieCarousel = ( { title, movies }: Props ) => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slides: { perView: 2, spacing: -15 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },

      breakpoints: {
        '(min-width: 600px)':{
          slides: { perView: 4, spacing: -15 },
        },
        '(min-width: 1000px)':{
          slides: { perView: 5, spacing: -15 },
        },
        '(min-width: 1300px)':{
          slides: { perView: 6, spacing: -15 },
        },
        '(min-width: 1600px)':{
          slides: { perView: 7, spacing: -15 },
        },
        '(min-width: 1900px)':{
          slides: { perView: 8, spacing: -15 },
        },
        '(min-width: 2400px)':{
          slides: { perView: 10, spacing: -15 },
        },

        
      },

    },
    [
      // add plugins here
    ]
  )


  return (
    <div className="z-50 pl-2 sm:pl-14">
      <h2 className='-mb-4 ml-3 text-xl font-bold'>{ title }</h2>
      <div className="keen-slider" ref={sliderRef}>
        {
          movies?.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        }
      </div>
    </div>
  )
}
