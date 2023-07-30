<script setup>
defineProps({
    active: Boolean
});
</script>

<template>
    <button :class="{
        'border-slate-400 text-slate-400 text-xs py-0.5 px-2 rounded-2xl border hover:border-slate-300': true,
        'border-blue-400 text-blue-400': active
    }">
        <slot />
    </button>
</template>