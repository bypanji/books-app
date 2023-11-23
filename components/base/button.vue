<template>
    <div>
        <button :class="classNames" >{{ text }}</button>
    </div>
</template>

<script setup lang="ts">
type TypeVariant = 'warning' | 'primary' | 'danger' | 'secondary'

const props = defineProps({
    type : {
        type: String as PropType<TypeVariant>,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'md'
    },
    text: {
        type: String,
        default: ''
    }
})

const classNames = computed(() => {
    const result: string[] = ['button']
    if(props.type)
       result.push(`button--${props.type}`)

    if(props.size)
        result.push(`buton-size__${props.size}`)

    return result
})

</script>

<style lang="postcss" scoped>
 .button {
    @apply py-2 px-4 rounded text-xs font-medium uppercase leading-normal text-white;

    &--primary {
        @apply bg-blue-500 hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)];
    }
    &--warning {
        @apply bg-yellow-500 hover:bg-yellow-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)];
    }
    &--danger {
        @apply bg-red-500 hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)];
    }
    &--success {
        @apply bg-green-500 hover:bg-green-700 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)];
    }
    &--secondary {
        @apply bg-gray-500 hover:bg-gray-700 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)];
    }

    &--size {
        &__sm {
            @apply py-2 px-2;
        }
    }
  }

</style>