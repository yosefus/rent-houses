import { create } from 'zustand'

export const  useUserStore = create((set) => ({
   user: null,
   login: async (user) => {
      
      localStorage.user = user
      set({ user })
   },
   logout: () => {
      localStorage.clear()
      set({ user: null })
   }
}))