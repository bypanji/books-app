<template>
    <div class="input">
        <p class="input__label">{{ label }}</p>
        <input 
            :value="modelValue" 
            @input="emit('update:modelValue', $event.target?.value)" 
            class="input__form" 
            :placeholder="placeholder"
            :disabled="disabled"
            :type="type" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Email',
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

</script>

<style lang="postcss" scoped>
.input {
  @apply w-full;

  &__label {
    @apply block mb-2 text-sm font-medium text-gray-900;
  }

  &__form {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5;

    &::placeholder {
      @apply text-base;
    }

    &:disabled {
      @apply pointer-events-none;
    }

    &:focus {
      @apply ring-blue-500 border-blue-500;
    }
  }
}
</style>