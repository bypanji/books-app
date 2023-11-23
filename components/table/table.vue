<template>
    <div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th v-for="item of header" scope="col" class="px-6 py-3">
                            {{ item }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td v-for="key of keys" class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                            {{ item[key] }}
                        </td>
                        <td>
                            <BaseButton type="danger" text="detail" @click="emit('update', item._id)" />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type IResponseUsers } from '@/api/dashboard'
const props = defineProps({
    header: {
        type: Array,
        default: () => []
    },
    keys: {
        type: Array,
        default: () => []
    },
    data: {
        type: Array<IResponseUsers>,
        default: () => []
    }
})

const emit = defineEmits(["update"]);

</script>

<style scoped>

</style>