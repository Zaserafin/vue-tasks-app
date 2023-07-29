<script setup>
import { ref } from "vue";
import Panel from "@/components/Panel.vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";

const tasks = ref([
  { id: 1, name: "Testing Task 1 Application", complete: false },
  { id: 2, name: "Testing Task 2 Application", complete: false },
]);


function handleAddTask(newTask) {
  const task = {
    id: tasks.value.length + 2,
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
      <template #title>Lista de tareas</template>
      <TaskForm @submit="handleAddTask" />
      <TaskList :tasks="tasks" @delete="handleDeleteTask" />
    </Panel>
  </div>
</template>
