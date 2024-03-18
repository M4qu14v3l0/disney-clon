import { Metadata } from "next"
import Image from "next/image"
import { getImagePath, getMovieDataById } from "@/lib"
import { MovieInfo, MyFavorite, PopularityData } from "../components"


interface Props {
  params: { id: string }
}

export async function generateMetadata( {params: { id }} :Props ):Promise<Metadata> {
  const useId = id.toString()
  try{
      const { title } = await getMovieDataById(useId)
      return {
          title: `${title}`,
          description: `Movie: ${title}`
      }

  }
  catch(error){
      return {
          title: 'Pagina del pokemon',
          description: 'lorem'
      }
  }
}



export default async function Movie( {params: { id }} :Props ) {

  const movie = await getMovieDataById(id)


  return (
    <div className="relative text-[#f9f9f9]">
        <div key={movie.id} className="flex-full min-w-0 relative object-cover">
          <Image
            key={movie.id}
            src={getImagePath(movie.backdrop_path, true)}
            alt={movie.title}
            width={3440}
            height={1080}
          />  
          <div className="h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent bg-transparent inline absolute mt-0 top-0 left-0  p-10 space-y-5 ">
            <div className="mt-40 sm:mt-24 z-30">
              <div className="flex flex-col gap-5 items-start">
                  <MovieInfo movie={movie}/>
                  <div className="flex">
                    <PopularityData movie={movie}/>
                    <MyFavorite movie={movie}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      <div className="h-full w-full absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#1A1C29] z-10"/>
    </div>
  )
}
