import {defineStore} from 'pinia';
import {initialize} from '@/tools/initialize.js';
import {ref} from 'vue';
import {localGet, localSet} from '@/utils/localStorageFundamentals.js';

export const useGlobalVariable = defineStore('globalVariables', () => {
    const myTheme = ref(initialize('myTheme', false));
    const asideWide = ref(initialize("asideWide", false))

    function themeChanger() {
        if (myTheme.value === false) {
            localSet('myTheme', true);
        } else if (myTheme.value === true) {
            localSet('myTheme', false);
        }
        myTheme.value = localGet('myTheme');
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


    return {myTheme, themeChanger, asideWide, widen, unWiden};
});