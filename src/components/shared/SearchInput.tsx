'use client'

import * as z from "zod"

const formSchema = z.object({
  input: z.string().min(2).max(50),
})


export const SearchInput = () => {
  return (
    <div>
      <input placeholder="Tittle, character or genre"/>
      
    </div>
  )
}
