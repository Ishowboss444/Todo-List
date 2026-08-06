import { defineStore } from 'pinia';
import { initialize } from '@/tools/initialize.js';
import { ref } from 'vue';
import { localGet, localSet } from '@/utils/localStorageFundamentals.js';

export const useTheme = defineStore('theme', () => {
    const myTheme = ref(initialize('myTheme', false));

    function themeChanger() {
        if (myTheme.value === false) {
            console.log(myTheme.value);
            localSet('myTheme', true);
        } else if (myTheme.value === true) {
            console.log(myTheme.value);
            localSet('myTheme', false);
        }
        myTheme.value = localGet('myTheme');
    }

    return { myTheme, themeChanger };
});