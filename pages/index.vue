<template>
    <div></div>
</template>

<script setup lang="ts">
import { sessionStore } from '@/store/session'

const profileStore = sessionStore()
const { identity } = storeToRefs(profileStore)
const router = useRouter()

const nextPage = () => {
    if(identity.role === 'admin')
        router.replace('/dashboard')

    router.replace('/books')
}

onMounted(() => {
    profileStore.getUserProfile()
    nextPage()
})
</script>

<style lang="postcss" scoped>

</style>