import { getDiscoverMovies } from "@/lib";
import { CarouselsBanner } from "./CarouselsBanner";

interface Props{
  id?: string;
  keywords?: string;
}

export const CarouselBannerWrapper = async({ id, keywords}: Props) => {

  const movies = await getDiscoverMovies(id, keywords);

  return (
    <CarouselsBanner movies={movies} />
  )
}
