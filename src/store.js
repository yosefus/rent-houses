import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
   user: null,
   login: async (formData) => {
      await new Promise(resolve => setTimeout(resolve, 5 * 1000))
      // apiReq
      const user = { name: 'yosef', age: 12, token: '9898' }
      localStorage.user = JSON.stringify(user)
      localStorage.token = user.token
      set({ user })
   },
   logout: () => {
      localStorage.clear()
      set({ user: null })
   }
}))


export const useUserPrefStore = create((set, get) => ({
   isDark: false,
   currency: 'usd',
   language: 'en',
   setCurrency: (cur) => set({ currency: cur }),
   setDark: () => set(state => ({ isDark: !state.isDark })),
   setLanguage: (lan) => {
      // check if lang exist
      set({ language: lan })
   },
   resetAll: () => set({ isDark: false, currency: 'usd', language: 'en' })
})) 

