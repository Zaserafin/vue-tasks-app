<script setup>
import Panel from "@/components/Panel.vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "../components/TaskList.vue";
</script>

<template>
  <div class="h-full p-2 max-w-3xl mx-auto gap-10 md:py-6 md:px-0">
    <Panel>
      <template #title>Lista de tareas</template>

      <TaskForm />

      <TaskList />

    </Panel>
  </div>
</template>
