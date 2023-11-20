<script setup>
import { ref } from "vue";
import Button from "@/components/Button.vue";

let emit = defineEmits(["delete", "update"]);
let props = defineProps({ task: Object });

let showInput = ref(false);

function handleUpdateClick() {
    if (showInput.value) console.log("Guardar en base de datos");
    showInput.value = !showInput.value;
}

function handleDelete() {
    emit("delete", props.task);
}

</script>

<template>
    <li class="flex justify-between items-center h-11">
        <input v-if="showInput" class="outline-0 border-none bg-[var(--subtle-color)] p-2 rounded-md w-full me-2"
            placeholder="Editar categoría" v-model="task.name" ref="inputRef" />
        <label v-if="!showInput" class="w-full flex items-center cursor-pointer">
            <input type="checkbox" class="me-1 cursor-pointer w-4 h-4" v-model="task.complete" />
            <div class="truncate">
                {{ task.name }}
            </div>
        </label>
        <div class=" flex gap-1 flex-shrink-0">
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