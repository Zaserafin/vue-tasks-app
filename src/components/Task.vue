<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
let emit = defineEmits(["delete", "update"]);
let showInput = ref(false);


let props = defineProps({
    task: Object
});


function handleUpdateClick(event) {
    if (showInput.value) {
        console.log("Guardar en base de datos");
    }

    showInput.value = !showInput.value;
}

function handleDelete() {
    emit("delete", props.task);
}

</script>

<template>
    <li class="flex justify-between items-center py-1">
        <input v-if="showInput" class="outline-0 border-none bg-slate-600 text-white p-2 rounded-md w-full"
            placeholder="Editar categoría" v-model="task.name" />
        <label v-if="!showInput" class="p-2 w-full truncate flex items-center md:max-w-xl">
            <input type="checkbox" class="me-1 cursor-pointer" v-model="task.complete" />
            {{ task.name }}
        </label>
        <div class="hidden ps-4 flex-shrink-0 md:inline-block">
            <Button color="red" v-if="!showInput" @click="handleDelete">X</Button>
            <Button color="green" @click="handleUpdateClick">Z</Button>
        </div>
    </li>
</template>