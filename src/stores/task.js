import { filters } from "@/data/params";
import { generateGuid } from "@/utils";
import { defineStore } from "pinia"
import { computed, ref } from "vue"

const STORAGE_KEY = "@tasks";

export function setupTaskStore() {
    const storage = localStorage.getItem(STORAGE_KEY);
    if (storage) {
        const data = JSON.parse(storage);
        const taskStore = useTaskStore();
        taskStore.setupTasks(data);
    }
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

        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value));
    }

    function updateTask(updatedTask) {
        const index = findTaskIndex(updatedTask.id);
        if (index !== -1) {
            tasks.value[index] = updatedTask;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value));
        }
    }

    function removeTask(id) {
        const index = findTaskIndex(id);
        if (index !== -1) {
            tasks.value.splice(index, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value));
        }
    }

    function completeTask(id) {
        const index = findTaskIndex(id);
        if (index !== -1) {
            tasks.value[index].completed = !tasks.value[index].completed;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value));
        }
    }

    function changeFilter(filter) {
        taskFilter.value = filter.id
    }

    function setupTasks(list) {
        tasks.value = list;
    }

    return { tasks, taskFilter, filteredTask, completedTasks, setupTasks, addTask, updateTask, removeTask, completeTask, changeFilter }
})