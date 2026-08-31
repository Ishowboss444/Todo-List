import {defineStore} from 'pinia';
import {ref} from 'vue';
import {localGet, localSet ,initialize} from '@/utils/localStorage.js';

export const useVariableStore = defineStore('globalVariables', () => {
    const theme = ref(initialize('theme', 'dark'));
    const asideWide = ref(initialize("asideWide", false))

    function themeChanger() {
        if (theme.value === 'dark') {
            document.documentElement.dataset.theme= 'light'
            localSet('theme', 'light');
        } else if (theme.value === 'light') {
            localSet('theme', 'dark');
            document.documentElement.dataset.theme= 'dark'
        }
        theme.value = localGet('theme');
    }

    function widen() {
        if (!asideWide.value) {
            asideWide.value = true
            localSet('asideWide', true);
        }
    }

    function unWiden() {
        if (asideWide.value) {
            asideWide.value = false
            localSet('asideWide', false);
        }
    }


    return {theme, themeChanger, asideWide, widen, unWiden};
});