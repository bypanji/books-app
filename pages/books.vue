<template>
    <div class="my-5">
        <BaseButton type="danger" text="Create" @click="showModalCreate"/>
    </div>
    <Table :header="tableHeader" :keys="tableKey" :data="books" @update="showModalUpdate"/>

    <ModalUpdate v-model:visible="modalCreateBooks" @submit="submitBooks">
        <BaseInput v-model="payloadBooks.name" label="name" placeholder="input name" />
        <div class="py-3">
            <p class="mb-2 text-sm font-medium text-gray-900">Descriptions</p>
            <textarea v-model="payloadBooks.description" name="desc" cols="31" rows="4" placeholder="input descriptions" class="border-solid"></textarea>
        </div>
    </ModalUpdate>
    <ModalUpdate v-model:visible="modalUpdateBooks" @submit="editBooks">
        <BaseInput v-model="updateBooks.name" label="name" placeholder="input name" />
        <div class="py-3">
            <p class="mb-2 text-sm font-medium text-gray-900">Descriptions</p>
            <textarea v-model="updateBooks.description" name="desc" cols="31" rows="4" placeholder="input descriptions" class="border-solid"></textarea>
        </div>
    </ModalUpdate>
</template>

<script setup lang="ts">
import { getListBooks, type IResponseBooks } from '@/api/dashboard'
import { type IPayloadBooks, manageBooks } from '@/api/books'
const books = ref<IResponseBooks>()
const modalCreateBooks = ref<boolean>(false)
const modalUpdateBooks = ref<boolean>(false)
const bookId = ref<string>('')
const page = ref<number>(1)
const limit = ref<number>(20)
const token = useCookie('token')
const tableHeader = ref(['Name', 'Description', 'Created', 'Created by id', 'Actions'])
const tableKey = ref(['name', 'description', 'created', 'created-by-id'])
const payloadBooks = reactive<IPayloadBooks>({
    name: '',
    description: ''
})
const updateBooks = reactive<IPayloadBooks>({
    name: '',
    description: ''
})

const getBooks = () => {
    if(!token.value)
        return

    getListBooks(page.value, limit.value, token.value)
    .then((response) => {
        books.value = response.data?.data
    }).catch((error) => 
        console.error(error)
    )
}

const submitBooks = () => {
    if(!token.value || !payloadBooks.name) return

    manageBooks.create(payloadBooks, token.value)
    .then((response) => {
        modalCreateBooks.value = false
        getBooks()
    }).catch((error) => {
        alert(error.message)
    })
}

onMounted(() => {
    getBooks()
})

const showModalUpdate = (value: string) => {
    modalUpdateBooks.value = !modalUpdateBooks.value
    if(!token.value) return

    manageBooks.getDetail(value, token.value)
    .then((response) => {
        updateBooks.name = response.data?.name
        updateBooks.description = response.data?.description
        bookId.value = response.data?._id
    }).catch((error) => {
        console.error(error)
    })
}

const editBooks = () => {
    if(!token.value) return

    manageBooks.update( bookId.value, updateBooks, token.value).then((response) =>{
        modalUpdateBooks.value = false
        getBooks()
    }).catch((error) => {
        console.error(error)
    })
}

const showModalCreate = () => {
    modalCreateBooks.value = !modalCreateBooks.value
}

</script>

<style scoped>

</style>