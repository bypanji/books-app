import { getRole } from '@/api/auth'

export const sessionStore = defineStore('sessionStore', {
  state: () => ({
    identity: {},
  }),
  actions: {
    async getUserProfile() {
      const token = useCookie('token')
      if(!token.value) return
      const { data } = await getRole(token.value)
      this.identity = data
    },

    setIdentity(e?: any) {
      this.identity = e
      return this.identity
    },
  },
})
