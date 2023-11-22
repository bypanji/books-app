export default defineNuxtRouteMiddleware(async (to) => {
    const config = useRuntimeConfig()
    const token = useCookie('token')
  
    /**
     * if token exists and url is /login redirect to homepage
     */
    if (token.value && to?.name === 'login') return await navigateTo('/dashboard')
  
    /**
     * if token doesn't exist redirect to log in
     */
    if (!token.value && to?.name !== 'login') {
      abortNavigation()
      return await navigateTo('/login')
    }
  })