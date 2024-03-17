
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from "@/lib";

import { MovieCarousel } from "@/components";
import { CarouselBannerWrapper } from "@/components/shared/Carousel/CarouselBannerWrapper";

export default async function Home() {

  const upcomingMovies = await getUpComingMovies()
  const topRateMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();


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
