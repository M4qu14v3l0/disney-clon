import Image from "next/image"
import Link from "next/link"

import { GenreDropDown, ThemeToggler } from "../.."
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons"

export const Header = () => {
  return (
    <header className="w-full h-20 z-50 flex items-center justify-between p-2 dark:bg-gradient-to-t dark:from-gray-200/0 dark:via-gray-900/25 dark:to-gray-900">
      <div className="flex justify-center items-center gap-4">
        <Link href={'/'} className="mx-2 sm:mx-10">
          <Image 
              alt="Disney" 
              src={"logo/disney_logo.svg"} 
              width={100}
              height={100}
              className="cursor-pointer hidden dark:block"
              priority
            />
            <Image 
              alt="Disney" 
              src={"logo/disney_logo_wt.svg"} 
              width={100}
              height={100}
              className="cursor-pointer block dark:hidden"
              priority
            />
        </Link>
        <Link href={"/search"} className="flex items-center gap-1">
          <MagnifyingGlassIcon className="w-5 h-5"/>
          <p className="hidden sm:block">Search</p>
        </Link>
        <Link href={"/favorites"} className="flex items-center gap-1">
          <PlusIcon className="w-5 h-5"/>
          <p className="hidden sm:block">My List</p>
        </Link>
        <GenreDropDown />
      </div>
      <nav className="flex space-x-2">
        <ThemeToggler />
      </nav>
    </header>
  )
}
