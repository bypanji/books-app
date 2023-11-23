<template>
    <div class="h-full flex justify-center items-center">
        <div class="login-wrapper">
                <BaseAvatar 
                    size="md"
                    :src="src"/>
                <BaseInput
                    v-model="email" 
                    label="Your Email"/> 
                <BaseInput 
                    v-model="passwrd"
                    label="Password"
                    type="password"/> 
                <BaseButton type="danger" text="submit" @click="onAuthLogin" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'

const router = useRouter()
const email = ref<string>('')
const passwrd = ref<string>('')
const src = ref<string>('https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg')
const { authenticateUser } = useAuthStore()
definePageMeta({ layout: 'blank' })

const onAuthLogin = async () => {
    const body = {
        email: email.value,
        password: passwrd.value
    }
    try {
        await authenticateUser(body);
        router.replace('/')
    } catch (error) {
        console.error(error)
    }
}

</script>

<style lang="postcss" scoped>
.login-wrapper {
    @apply w-full md:w-1/2 lg:w-4/12 grid gap-6 place-items-center py-10 px-10 border-solid border-2 border-slate-300 rounded-lg;
}

</style>