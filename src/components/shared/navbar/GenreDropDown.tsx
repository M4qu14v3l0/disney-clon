import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"


import { Genres } from "@/interfaces";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const GenreDropDown = async () => {
  
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    },
    next:{
      revalidate: 60 * 60 * 24
    }
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-1 justify-center items-center">
          <ChevronDownIcon/> Genre
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {
            data.genres.map(genre => (
              <Link href={`/genre/${genre.id}?genre=${genre.name}`} key={genre.id}>
                <DropdownMenuItem >
                    {genre.name}
                </DropdownMenuItem>
              </Link>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </>

  )
}
