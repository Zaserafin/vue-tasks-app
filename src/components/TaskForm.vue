<script setup>
import { ref } from "vue";

let newTask = ref('');

const emit = defineEmits(["submit"])

function submit() {
    if (newTask === null || newTask.value === '') return;
    emit('submit', newTask.value);
    newTask.value = '';
}

</script>

<template>
    <form action="#" @submit.prevent="submit">
        <div class="text-white flex">
            <input type="text" v-model="newTask" placeholder="Añadir una tarea"
                class="outline-0 border-none bg-slate-600 text-white p-2 rounded-s-md w-full">
            <button type="submit"
                class=" bg-slate-600 rounded-e-md p-2 border-l border-slate-700 hover:bg-slate-500 transition-colors">
                Añadir
            </button>
        </div>
    </form>
</template>