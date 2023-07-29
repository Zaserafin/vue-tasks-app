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
    <li class="flex justify-between items-center h-11">
        <input v-if="showInput" class="outline-0 border-none bg-slate-600 text-white p-2 rounded-md w-full"
            placeholder="Editar categoría" v-model="task.name" />
        <label v-if="!showInput" class="w-full flex items-center cursor-pointer">
            <input type="checkbox" class="me-1 cursor-pointer w-4 h-4" v-model="task.complete" />
            <div class="truncate">
                {{ task.name }}
            </div>
        </label>
        <div class="flex-shrink-0">
            <Button color="red" v-if="!showInput" @click="handleDelete">X</Button>
            <Button color="green" @click="handleUpdateClick">Z</Button>
        </div>
    </li>
</template>