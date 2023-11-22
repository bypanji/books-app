import { defineStore } from 'pinia';
import { authLogin, type IFormLogin } from '@/api/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false
  }),
  actions: {
    async authenticateUser({ email, password }: IFormLogin) {
        const body = {
            email: email,
            password: password
        }

      const response = await authLogin(body)

      if (response.data.token) {
        const token = useCookie('token')
        token.value = response.data?.token
        this.authenticated = true
      }
    },
    logUserOut() {
      const token = useCookie('token')
      this.authenticated = false
      token.value = null
    },
  },
});