import '@/assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { setupThemeStore } from '@/stores/theme';
import { setupTaskStore } from '@/stores/task';

import App from '@/App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

setupThemeStore();
setupTaskStore();

app.mount('#app');
