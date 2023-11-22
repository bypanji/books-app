import { getRole } from '@/api/auth'

export const sessionStore = defineStore('sessionStore', {
  state: () => ({
    identity: {},
  }),
  actions: {
    async getUserProfile() {
      const {
        data: { data },
      } = await getRole()
      this.$patch({
        identity: data,
      })
    },

    setIdentity(e?: any) {
      this.identity = e
      return this.identity
    },
  },
})
