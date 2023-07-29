<script setup>
import Task from "@/components/Task.vue";
import Badge from "./Badge.vue";

defineProps({
    tasks: Array
});

const emit = defineEmits(["delete"]);

function handleDeleteTask(task) {
    emit('delete', task.id);
}

</script>

<template>
    <div class="flex flex-wrap gap-1 mt-4">
        <Badge class="text-indigo-500 border-indigo-500">Todas</Badge>
        <Badge>Completadas</Badge>
        <Badge>En progreso</Badge>
    </div>
    <ul class="overflow-y-scroll h-[calc(100%_-_120px)] divide-y divide-slate-600 mt-4">
        <h2 v-if="tasks.length === 0" class="text-lg my-2 text-center">No hay tareas registradas.</h2>
        <Task v-for="task in tasks" :key="task.id" :task="task" @delete="handleDeleteTask" />
    </ul>
</template>