import {defineStore} from "pinia";
import {ref} from "vue";
import {initialize} from "@/tools/initialize.js";
import {localSet} from "@/utils/localStorageFundamentals.js";


export const arrayManipulation = defineStore('arrayOnLoaded', () => {
    const filterBar = ref([{
        title: 'All', status: initialize('allState', false)
    }, {
        title: 'Active', status: initialize('activeState', true)
    }, {
        title: 'Completed', status: initialize('completedState', false)
    },])

    function activeLog(val) {
        if (val === 0) {
            filterBar.value[0].status = true
            filterBar.value[1].status = false
            filterBar.value[2].status = false
            localSet('allState', true)
            localSet('activeState', false)
            localSet('completedState', false)

        } else if (val === 1) {
            filterBar.value[0].status = false
            filterBar.value[1].status = true
            filterBar.value[2].status = false
            localSet('activeState', true)
            localSet('allState', false)
            localSet('completedState', false)
        } else if (val === 2) {
            filterBar.value[0].status = false
            filterBar.value[1].status = false
            filterBar.value[2].status = true
            localSet('completedState', true)
            localSet('allState', false)
            localSet('activeState', false)
        }
    }

    return {filterBar, activeLog}
})