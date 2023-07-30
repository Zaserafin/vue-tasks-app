<script setup>
import { ref, computed } from "vue";
import Panel from "@/components/Panel.vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";
import Badge from "@/components/Badge.vue";

const filters = [
  {
    id: "all",
    label: "Todas",
    key: "complete",
    value: null,
    default: true
  },
  {
    id: "completed",
    label: "Completadas",
    key: "complete",
    value: true,
    default: false
  },
  {
    id: "inProgress",
    label: "En progreso",
    key: "complete",
    value: false,
    default: false
  },
];

const tasks = ref([
  { id: 0, name: "Testing Task 1 Application", complete: false },
  { id: 1, name: "Testing Task 2 Application", complete: false },
]);

const currentFilter = ref("all");

const completedTasks = computed(() => tasks.value.filter(task => task.complete));
const inProgressTasks = computed(() => tasks.value.filter(task => !task.complete));

const filteredTask = computed(() => {
  const filter = filters.find(f => f.id === currentFilter.value);
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


</script>

<template>
  <div class="h-full p-2 max-w-3xl mx-auto gap-10 md:py-6 md:px-0">
    <Panel>
      <template #heading>
        <h2 class="text-2xl text-left font-bold my-2">
          Listado de tareas
        </h2>

        <div class="flex flex-col">
          <span>{{ completedTasks.length }}/{{ tasks.length }} completadas</span>
        </div>
      </template>
      <TaskForm @submit="handleAddTask" />

      <div class="flex flex-wrap gap-1 mt-4">
        <Badge v-for="filter in filters" :class="{ 'text-indigo-500 border-indigo-500': filter.id === currentFilter }"
          :key="filter.id" @click="currentFilter = filter.id">{{ filter.label }}</Badge>
      </div>

      <TaskList :tasks="filteredTask" @delete="handleDeleteTask" />
    </Panel>
  </div>
</template>
