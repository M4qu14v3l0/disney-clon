import { HeartFilledIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const WithoutFavorites = () => {
  return (
    <div className="w-full h-[80vh] md:h-[90vh] flex flex-col justify-center items-center gap-6">
      <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 text-center">Let&apos;s go add some favorites!</p>
      <HeartFilledIcon className="w-16 h-16 text-red-500" />
      <Link href={'/'} className="w-40 h-10 flex justify-center items-center bg-[#1A1C29] border-white border-[1px] rounded-lg transition duration-200 hover:scale-105">
        Go ahead
      </Link>
    </div>
  )
}
