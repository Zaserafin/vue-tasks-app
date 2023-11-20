<script setup>
import { ref } from "vue";

let newTask = ref('');

const emit = defineEmits(["submit"])

function submit() {
    if (newTask.value === null || newTask.value === '') return;
    emit('submit', newTask.value);
    newTask.value = '';
}

</script>

<template>
    <form action="#" @submit.prevent="submit">
        <div class="flex">
            <input type="text" v-model="newTask" placeholder="Añadir una tarea"
                class="outline-0 border-none bg-[var(--subtle-color)] p-2 rounded-s-md w-full">
            <button type="submit"
                class=" bg-[var(--subtle-color)] rounded-e-md p-2 border-l border-[var(--bg-color)] hover:bg-[var(--outline-color)]">
                Añadir
            </button>
        </div>
    </form>
</template>