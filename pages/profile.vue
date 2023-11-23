<template>
    <div class="w-full h-full flex items-center justify-center">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#">
                <div class="flex justify-center items-center">
                    <BaseAvatar size="md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
                </div>
                <div>
                    <BaseInput v-model="pyloadUser.email" label="YOUR EMAIL" :placeholder="identity.email" :disabled="isDisabled" />
                </div>
                <div>
                   <BaseInput v-model="pyloadUser.username" label="YOUR USERNAME" :placeholder="identity.username" :disabled="isDisabled"  />
                </div>
                <div>
                   <BaseInput label="YOUR ROLE" :placeholder="identity.role" disabled  />
                </div>
                <div>
                   <BaseInput v-model="pyloadUser.password" label="YOUR PASSWORD" type="password" :disabled="isDisabled" placeholder="********"  />
                </div>
                <div>
                   <BaseInput v-model="pyloadUser.confirm" label="CONFIRM PASSWORD" type="pasword" :disabled="isDisabled" placeholder="********" />
                </div>
                <div class="flex items-center justify-center">
                    <BaseButton type="danger" text="UPDATE YOUR PROFILE" @click="updateProfile" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { sessionStore } from '@/store/session'
import { type IPayloadUser, createUser } from '@/api/dashboard';

const token = useCookie('token')
const profileStore = sessionStore()
const { identity } = storeToRefs(profileStore)
const isDisabled = ref<boolean>(true)
const pyloadUser = reactive<IPayloadUser>({
    email   : '',
    username: '',
    password: '',
    confirm : '',
})

const updateProfile = () => {
    if(isDisabled.value) {
        isDisabled.value = !isDisabled.value

        return
    }
    else if(!isDisabled.value) {
        updateUser()
    }
}

const updateUser = () => {
    console
    if(!token.value) return

    createUser(pyloadUser, token.value)
    .then((response) => {
        profileStore.getUserProfile()
        isDisabled.value = true
    }).catch((error) => {
        alert(error.message)
    })
}
</script>

<style scoped>

</style>