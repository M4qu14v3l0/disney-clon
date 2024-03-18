
import { getMoviesByParam } from "@/lib";

import { MovieCarousel } from "@/components";
import { CarouselBannerWrapper } from "@/components/shared/Carousel/CarouselBannerWrapper";
import { Movie } from "@/interfaces";

export default async function Home() {

  const upcomingMovies = await getMoviesByParam('upcoming')
  const topRateMovies = await getMoviesByParam('top_rated')
  const popularMovies = await getMoviesByParam('popular')


  return (
    <main className="">

    <CarouselBannerWrapper />

    <div className="flex flex-col space-y-1">
      <MovieCarousel movies={popularMovies} title="Popular"/>
      <MovieCarousel movies={upcomingMovies} title="Only in Disney"/>
      <MovieCarousel movies={topRateMovies} title="Iconic Series"/>
    </div>


    </main>
  );
}
