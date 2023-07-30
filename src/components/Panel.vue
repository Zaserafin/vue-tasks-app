<script setup>
</script>

<template>
    <div class="h-full flex flex-col p-4 rounded-md bg-slate-700 border-slate-600 text-white overflow-y-hidden">
        <div v-if="$slots.heading" class="flex flex-col items-start justify-between mb-2 md:flex-row md:items-center">
            <slot name="heading" />
        </div>

        <slot />
    </div>
</template>