import {defineStore} from 'pinia';
import {initialize} from '@/utils/initialize.js';
import { ref, watch } from 'vue';
import { localSet } from '@/utils/localStorageSet.js';
import { localGet } from '@/utils/localStorageGet.js';

export const useTheme = defineStore('theme' , ()=>{
    const myTheme = ref(initialize('myTheme' , false))
    function themeChanger() {
        if (myTheme.value === false) {
            localSet('myTheme' , true)
        } else if (myTheme.value === true) {
            localSet('myTheme', false);
        }
        myTheme.value = localGet('myTheme');
    }
    return{myTheme , themeChanger}
})