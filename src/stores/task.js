import { filters } from "@/data/params";
import { generateGuid } from "@/utils";
import { defineStore } from "pinia"
import { computed, ref } from "vue"

const STORAGE_KEY = "@theme";

export function setupTaskStore() {

}

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([]);
    const taskFilter = ref("all");

    const completedTasks = computed(() => tasks.value.filter(task => task.completed));

    const filteredTask = computed(() => {
        const filter = filters.find(f => f.id === taskFilter.value);
        if (filter.id === "all") return tasks.value;
        return tasks.value.filter(task => {
            return task[filter.key] === filter.value;
        });
    })

    function findTaskIndex(id) {
        return tasks.value.findIndex(t => t.id === id);
    }

    function addTask(newTask) {
        const task = {
            id: generateGuid(),
            name: newTask,
            completed: false
        };
        tasks.value.push(task);
    }

    function updateTask(updatedTask) {
        const index = findTaskIndex(updatedTask.id);
        if (index !== -1) {
            tasks.value[index] = updatedTask;
        }
    }

    function removeTask(id) {
        const index = tasks.value.findIndex((t) => {
            return t.id === id;
        })
        tasks.value.splice(index, 1);
    }

    function completeTask(id) {
        const index = findTaskIndex(id);
        if (index !== -1) {
            tasks.value[index].completed = !tasks.value[index].completed;
        }
    }

    function changeFilter(filter) {
        taskFilter.value = filter.id
    }

    return { tasks, taskFilter, filteredTask, completedTasks, addTask, updateTask, removeTask, completeTask, changeFilter }
})