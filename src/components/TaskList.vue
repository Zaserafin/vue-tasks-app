<script setup>
import Task from "@/components/Task.vue";

defineProps({
    tasks: Array
});

const emit = defineEmits(["delete"]);

function handleDeleteTask(task) {
    emit('delete', task.id);
}

</script>

<template>
    <ul class="overflow-y-scroll h-[calc(100%_-_136px)] divide-y divide-slate-600 mt-4 pe-1">
        <h2 v-if="tasks.length === 0" class="text-lg my-2 text-center">No hay tareas registradas.</h2>
        <Task v-for="task in tasks" :key="task.id" :task="task" @delete="handleDeleteTask" />
    </ul>
</template>