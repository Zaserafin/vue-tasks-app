<template>
    <li class="flex justify-between items-center">
        <label class="p-2 w-full truncate flex items-center md:max-w-xl">
            <input class="me-1 cursor-pointer" type="checkbox" />
            Label o Titulo de la tarea
        </label>
        <div class="hidden md:inline-block">
            <button class="bg-red-500 mx-1 w-8 h-8 hover:bg-red-400 transition-colors rounded-md">X</button>
            <button class="bg-green-500 mx-1 w-8 h-8 hover:bg-green-400 transition-colors rounded-md">Z</button>
        </div>
    </li>
</template>