import { Movie } from '@/interfaces';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface FavoriteStoreState {
  favorites: Movie[];
  addFavorite: (newFavorite: Movie) => void;
}

export const useFavoriteStore = create<FavoriteStoreState>()(
  persist( 
    (set) => ({
      favorites: [],
      addFavorite: (newFavorite) => set((state) => {
        const { id } = newFavorite
        const existingIndex = state.favorites.findIndex((fav) => fav.id === id)
        if (existingIndex !== -1) {
          const updatedFavorites = [...state.favorites]
          updatedFavorites.splice(existingIndex, 1)
          return { favorites: updatedFavorites }
        } else {
          return { favorites: [...state.favorites, newFavorite] }
        }
      })
  })
    , { name: 'favorite-store'}
  )
)
