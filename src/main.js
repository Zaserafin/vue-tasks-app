import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { setupThemeStore } from "@/stores/theme";

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

setupThemeStore();

app.mount('#app');
