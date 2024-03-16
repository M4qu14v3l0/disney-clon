import Image from "next/image"
import Link from "next/link"

import { ThemeToggler } from ".."
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <div className="flex items-center">
        <Link href={'/'} className="mr-10">
          <Image 
              alt="Disney" 
              src={"logo/disney_logo.svg"} 
              width={80}
              height={80}
              className="cursor-pointer hidden dark:block"
            />
            <Image 
              alt="Disney" 
              src={"logo/disney_logo_wt.svg"} 
              width={120}
              height={120}
              className="cursor-pointer block dark:hidden"
            />
        </Link>
        <Link href={"/search"} className="flex items-center gap-2">
          <MagnifyingGlassIcon className="w-5 h-5"/>
          <p className="hidden sm:block">Search</p>
        </Link>
      </div>
      <nav className="flex space-x-2">
        <ThemeToggler />
      </nav>
    </header>
  )
}
