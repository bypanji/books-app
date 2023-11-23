<template>
    <div>
        <div class="my-5">
            <BaseButton type="danger" text="Create" @click="showModalCreate"/>
        </div>
        <Table :header="tableHeader" :keys="tableKey" :data="users" @update="showModal"  />
        <ModalUpdate v-model:visible="modal" ok-button>
            <div v-for="(item, index) in userDetail" class="w-full" :key="index">
                <BaseInput :label="index.toString()" :placeholder="item" disabled />
            </div>
        </ModalUpdate>

        <ModalUpdate v-model:visible="modalCreate" @submit="submitUser()">
            <BaseInput v-model="pyloadUser.email" label="Email" placeholder="input email" />
            <BaseInput v-model="pyloadUser.username" label="Username" placeholder="input username" />
            <BaseInput v-model="pyloadUser.password" label="Password" placeholder="input password" type="password"/>
            <BaseInput v-model="pyloadUser.confirm" label="Confirm" placeholder="confirm password" type="password" />
            <BaseInput v-model="pyloadUser.role" label="Role" placeholder="input role" />
        </ModalUpdate>
    </div>
</template>

<script setup lang="ts">
import { getDashboard, getListUsers, type IResponseUsers, getDetailUser, type IPayloadUser, createUser } from '@/api/dashboard'
const dashboardResponse = ref<string>('')
const users = ref<IResponseUsers[]>([])
const page = ref<number>(1)
const limit = ref<number>(20)
const modal = ref<boolean>(false)
const modalCreate = ref<boolean>(false)
const userDetail = ref()
const token = useCookie('token')
const tableHeader = ref(['Created', 'Email', 'Role', 'Username', 'Actions'])
const tableKey = ref(['created', 'email', 'role', 'username'])
const pyloadUser = reactive<IPayloadUser>({
    email   : '',
    username: '',
    password: '',
    confirm : '',
    role    : ''
})

const getUser = () => {
    if(!token.value)
        return

    getListUsers(page.value, limit.value, token.value)
    .then((response) => {
        users.value = response.data?.data
    }).catch((error) => 
        console.error(error)
    )
}

const checkDashboard = () => {
    getDashboard()
    .then((response) => {
        dashboardResponse.value = response.data.data 
        getUser()
    }).catch((error) => 
        console.error(error)
    )
}

onMounted(() => {
    checkDashboard()
})

const submitUser = () => {
    console
    if(!token.value) return

    createUser(pyloadUser, token.value)
    .then((response) => {
        modalCreate.value = false
        getUser()
    }).catch((error) => {
        alert(error.message)
    })
}

const showModal = (value: string) => {
    modal.value = !modal.value
    if(!modal.value || !token.value) 
        return

    getDetailUser(value, token.value)
    .then((response) =>{
        userDetail.value = response.data
    }).catch((error) => {
        console.error(error)
    })

}

const showModalCreate = () => {
    modalCreate.value = !modalCreate.value
}

</script>

<style lang="postcss" scoped>

</style>