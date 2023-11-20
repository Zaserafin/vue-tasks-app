<script setup>
import { ref, onMounted } from 'vue';
import Button from '@/components/Button.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();

let props = defineProps({ task: Object });
let showInput = ref(false);

const text = ref('');
const completed = ref(false);

onMounted(() => {
  text.value = props.task.name;
  completed.value = props.task.completed;
});

function handleUpdateClick() {
  showInput.value = !showInput.value;
  const task = {
    id: props.task.id,
    name: text.value,
    completed: props.task.completed
  };
  taskStore.updateTask(task);
}

function handleCompleteTask() {
  taskStore.completeTask(props.task.id);
}

function handleDelete() {
  taskStore.removeTask(props.task.id);
}
</script>

<template>
  <li class="flex justify-between items-center h-11">
    <input
      v-if="showInput"
      class="outline-0 border-none bg-[var(--subtle-color)] p-2 w-full me-2"
      placeholder="Editar categoría"
      v-model="text"
      ref="inputRef"
    />
    <label v-if="!showInput" class="w-full flex items-center cursor-pointer">
      <input
        type="checkbox"
        class="me-1 cursor-pointer w-4 h-4"
        v-model="completed"
        @change="handleCompleteTask"
      />
      <div class="truncate">
        {{ text }}
      </div>
    </label>
    <div class="flex gap-1 flex-shrink-0">
      <Button v-if="!showInput" color="red" @click="handleDelete">
        <i class="bi bi-x-lg"></i>
      </Button>
      <Button color="green" @click="handleUpdateClick">
        <i v-if="!showInput" class="bi bi-pencil-fill"></i>
        <i v-if="showInput" class="bi bi-check-lg"></i>
      </Button>
    </div>
  </li>
</template>
