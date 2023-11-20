<template>
  <div
    class="h-full flex flex-col p-4 rounded-md shadow-2xl shadow-[var(--shadow-color)] text-white overflow-y-hidden"
  >
    <div v-if="$slots.heading" class="flex flex-col items-start justify-between mb-2 md:flex-row">
      <slot name="heading" />
    </div>

    <slot />
  </div>
</template>
