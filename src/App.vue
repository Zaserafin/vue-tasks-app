<script setup>
import Panel from "@/components/Panel.vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";
import Badge from "@/components/Badge.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { useTaskStore } from "@/stores/task";
import { filters } from "@/data/params";

const taskStore = useTaskStore()

</script>

<template>
  <main class="h-full bg-[var(--bg-color)]">
    <div class="h-full p-2 max-w-3xl mx-auto gap-10 md:py-6 md:px-0">
      <Panel>
        <template #heading>
          <div>
            <h2 class="text-2xl text-left font-bold my-2">
              Listado de tareas
            </h2>

            <div class="flex flex-col">
              <span class=" text-sm">{{ taskStore.completedTasks.length }}/{{ taskStore.tasks.length }} completadas</span>
            </div>
          </div>

          <ThemeToggle />
        </template>
        <TaskForm />

        <div class="flex flex-wrap gap-1 mt-4">
          <Badge v-for="filter in filters" :active="filter.id == taskStore.taskFilter" :key="filter.id"
            @click="taskStore.changeFilter(filter)">
            {{ filter.label }}
          </Badge>
        </div>

        <TaskList />
      </Panel>
    </div>
  </main>
</template>
