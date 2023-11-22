<template>
    <div>
        ini dashboard
    </div>
</template>

<script setup lang="ts">
import { getDashboard } from '@/api/dashboard'
const dashboardResponse = ref('')

const checkDashboard = () => {
    getDashboard().then((response) => dashboardResponse.value = response.data.data ).catch((error) => console.error(error))
}

onMounted(() => {
    checkDashboard()
})

</script>

<style scoped>

</style>