
<template>
    <!-- <Teleport to="body"> -->
    <div class="container mx-auto">
        <div class="flex justify-center">
        <div
            v-show="props.visible"
            class="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50"
        >
        
            <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
            <div class="mt-4">
                <div class="mb-4 w-72">
                    <slot />
                </div>
                <BaseButton v-if="okButton"
                    type="danger"
                    text="OK"
                    @click="emit('update:visible', false)">
                </BaseButton>
                <div v-else class="flex gap-4">
                    <BaseButton
                        type="danger"
                        text="submit"
                        @click="emit('submit', true)" />
                    <BaseButton
                        type="secondary"
                        text="cancel"
                        @click="emit('update:visible', false)" />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
<!-- </Teleport> -->
</template>
<script lang="ts" setup>
    const props = defineProps({
        visible : {
            type: Boolean,
            default: true
        },
        okButton: {
            type: Boolean,
            default: false
        },
        submit: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits<{
        (e: 'update:visible', value: boolean): void
        (e: 'submit', value: boolean): void
    }>()
</script>
  