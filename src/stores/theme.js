import { defineStore } from "pinia"
import { computed, ref } from "vue"

const STORAGE_KEY = "@theme";

const ALLOWED_THEMES = ["dark", "light"];

const DEFAULT_THEME = "dark";

export function setupThemeStore() {
    const theme = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    const themeStore = useThemeStore();
    themeStore.changeTheme(theme);

}

export const useThemeStore = defineStore('theme', () => {
    const theme = ref(DEFAULT_THEME);

    const isDark = computed(() => theme.value === "dark");
    const isLight = computed(() => theme.value === "light");

    function changeTheme(newTheme) {
        if (!ALLOWED_THEMES.includes(newTheme)) return;
        theme.value = newTheme;
        localStorage.setItem(STORAGE_KEY, newTheme);
        document.documentElement.dataset.theme = newTheme;
    }

    function toggleTheme() {
        switch (theme.value) {
            case "dark":
                changeTheme("light");
                break;
            case "light":
                changeTheme("dark");
                break;
            default:
                changeTheme(DEFAULT_THEME);
                break;
        }
    }

    return { theme, isDark, isLight, changeTheme, toggleTheme }
})