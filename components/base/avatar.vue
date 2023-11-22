<template>
    <div>
        <img :class="classNames" class="p-1 rounded-full ring-2 ring-gray-300" :src="src" alt="Avatar">
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue-demi'
type SizeVariant = 'sm' | 'md' | 'lg'

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    size: {
        type: String as PropType<SizeVariant>,
        default: 'md'
    }
})

const classNames = computed(() => {
    let result: string = ''

    if(props.size === 'sm')
        result = 'h-10 w-10'

    if(props.size === 'md')
        result = 'h-24 w-24'

    if(props.size === 'lg')
        result = 'h-40 w-40'

    return result
})


</script>

<style scoped>

</style>