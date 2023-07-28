<script setup>
</script>

<template>
    <div class="h-full p-4 border rounded-lg bg-slate-700 border-slate-600 text-white">
        <h2 v-if="$slots.title" class="text-3xl text-center font-bold mb-6 mt-2">
            <slot name="title" />
        </h2>

        <slot />
    </div>
</template>