<template>
    <div class="header">
                <span class="darkness" @click="mainTheme.themeChanger()">
                    <img v-if="mainTheme.myTheme" src="../components/files/day/moon 1.svg" alt="sun">
                    <img v-else src="../components/files/night/sun 1.svg" alt="moon">
                </span>
    </div>
    <div class="central-holder">
        <div class="logo">
            <h1>My Tasks</h1>
        </div>
            <form class="search-section">
            <input type="text"
                   class="search"
                   placeholder="Type your task here..."
                   v-model="todosObject.title"
            >
            <input type="submit" value="+ Add" class="add-button" @click="adder()"/>
            </form>

        <div v-if="isEmpty"
             class="empty-card"
             id="special-width-empty"
        >
            <VEmptyImg/>
        </div>

        <div v-else class="card">
            <div class="master-card" v-for="(item , index) in todosArray" >
                <VCard
                    :todo="item"
                    @deleteSensor="deleted(index)"
                    @editeSensor="edited(index)"
                    @checkPointSensor="checkPointStore(index)"
                />
            </div>
        </div>
        <footer>
            <p>&copy;&nbsp;2026</p>
        </footer>
    </div>
</template>
<script setup lang="js">
    import VCard from '@/components/VCard.vue';
    import VEmptyImg from '@/components/VEmptyImg.vue';
    import { computed, ref } from 'vue';
    import { initialize } from '@/utils/initialize.js';
    import { localSet } from '@/utils/localStorageFundamentals.js';
    import { useTheme } from '@/stores/use.theme.js';

    const mainTheme = useTheme();

    const todosArray = ref(initialize('todos', []));
    const todosObject = ref({
        title: '',
        completed: false,
        edit: false,
        id: null,
    });
    const isEmpty = computed(() => {
        if (todosArray.value.length > 0) {
            return false;
        } else {
            return true;
        }
    });

    function adder() {
        if (todosObject.value.title === '') {
            alert('complete the input');
        } else {
            todosObject.value.id = todosArray.value.length
            todosArray.value.push({ ...todosObject.value });
            todosObject.value.title = '';
            localSet('todos', todosArray.value);
        }
    }

    function deleted(id) {
        console.log(id);
        todosArray.value.splice(id, 1);
        localSet('todos', todosArray.value);
    }
    function edited(index) {
        let edit = todosArray.value[index]
        console.log(edit);
        edit.edit = !edit.edit;
        localSet('todos', todosArray.value);
    }

    function checkPointStore(index) {
        let completed = todosArray.value[index]
        completed.completed = !completed.completed;
        localSet('todos', todosArray.value);
    }
</script>