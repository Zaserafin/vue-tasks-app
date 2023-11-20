<script setup>
import Task from '@/components/Task.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
</script>

<template>
  <ul class="overflow-y-scroll h-[calc(100%_-_136px)] divide-y divide-slate-600 mt-4 pe-1">
    <h2 v-if="taskStore.filteredTask.length === 0" class="text-lg my-2 text-center">
      No hay tareas registradas.
    </h2>
    <Task v-for="task in taskStore.filteredTask" :key="task.id" :task="task" />
  </ul>
</template>
