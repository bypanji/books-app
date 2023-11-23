import {sessionStore} from '@/store/session'
//get role in server side
export default defineNuxtPlugin(async () => {
  const token = useCookie('token')
  const { setIdentity} = sessionStore()
  const router = useRouter()

  const _fetch = useRequestFetch()
  try {
    const _dataProfile = await _fetch<{ data: unknown }>(
      '/users/me',
      {
        baseURL: process.env.API_URL,
        headers: {
          'Authorization': `Bearer ${token.value}`,
        },
      }
    )
    setIdentity(_dataProfile)
    console.log(
      'ini data role',
      _dataProfile
    )
  } catch (error: any) {
    const err = error
    console.error(err)
    if (err.data.message === 'unauthorized' && err?.data.code === 401) {
        token.value = null
        router.replace('/login')
    }
  }
})
