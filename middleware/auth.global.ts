import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(async (to) => {
  const { authenticated } = storeToRefs(useAuthStore())
    const token = useCookie('token')

    if (token.value) {
      authenticated.value = true
    }

    if (token.value && to?.name === 'login') return await navigateTo('/dashboard')

    if (!token.value && to?.name !== 'login') {
      abortNavigation()
      return await navigateTo('/login')
    }
  })