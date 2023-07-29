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
    <ul class="overflow-y-scroll h-[calc(100%_-_120px)] divide-y divide-slate-600 mt-4">
        <Task v-for="task in tasks" :key="task.id" :task="task" @delete="handleDeleteTask" />
    </ul>
</template>