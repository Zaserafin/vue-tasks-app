<script setup>
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
</script>

<template>
  <button @click="themeStore.toggleTheme">
    <i v-if="themeStore.isLight" class="bi bi-brightness-high-fill"></i>
    <i v-if="themeStore.isDark" class="bi bi-moon-stars-fill"></i>
  </button>
</template>
