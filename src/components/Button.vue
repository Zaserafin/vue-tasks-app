<script setup>
defineProps({
    color: {
        type: String,
        default: "blue"
    },
    disabled: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <button :class="{
        'w-8 h-8 transition-colors rounded-md': true,
        'bg-slate-500 hover:bg-slate-400 cursor-not-allowed pointer-events-none': disabled,
        'bg-indigo-500 hover:bg-indigo-400': color === 'blue',
        'bg-green-500 hover:bg-green-400': color === 'green',
        'bg-red-500 hover:bg-red-400': color === 'red',
    }">
        <slot />
    </button>
</template>