<script setup>
import { ref, computed } from "vue";
import Panel from "@/components/Panel.vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";
import Badge from "@/components/Badge.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import settings from "@/data/settings";

const tasks = ref([]);
const currentFilter = ref("all");

const completedTasks = computed(() => tasks.value.filter(task => task.complete));

const filteredTask = computed(() => {
  const filter = settings.filters.find(f => f.id === currentFilter.value);
  if (filter.id === "all") return tasks.value;
  return tasks.value.filter(task => {
    return task[filter.key] === filter.value;
  });
})

function handleAddTask(newTask) {
  const task = {
    id: tasks.value.length + 1,
    name: newTask,
    complete: false
  };
  tasks.value.push(task);
}

function handleDeleteTask(id) {
  const index = tasks.value.findIndex((t) => {
    return t.id === id;
  })
  tasks.value.splice(index, 1);
}

function changeFilter(filter) {
  currentFilter.value = filter.id
}

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
              <span class=" text-sm">{{ completedTasks.length }}/{{ tasks.length }} completadas</span>
            </div>
          </div>

          <ThemeToggle />
        </template>
        <TaskForm @submit="handleAddTask" />

        <div class="flex flex-wrap gap-1 mt-4">
          <Badge v-for="filter in settings.filters" :active="filter.id == currentFilter" :key="filter.id"
            @click="changeFilter(filter)">
            {{ filter.label }}
          </Badge>
        </div>

        <TaskList :tasks="filteredTask" @delete="handleDeleteTask" />
      </Panel>
    </div>
  </main>
</template>
