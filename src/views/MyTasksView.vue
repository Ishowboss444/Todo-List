<template>
    <div class="header">
                <span class="darkness" @click="myTheme.themeChanger()">
                    <img v-if="myTheme.myTheme" src="../components/files/day/moon 1.svg" alt="sun">
                    <img v-else src="../components/files/night/sun 1.svg" alt="moon">
                </span>
    </div>
    <div class="central-holder">
        <div class="logo">
            <h1>My Tasks</h1>
        </div>
        <div class="search-section">
            <input type="text"
                   class="search"
                   placeholder="Type your task here..."
                   v-model="todosObject.title"
            >
            <button class="add-button" @click="adder()">+ Add</button>
        </div>

        <div v-if="isEmpty"
             class="empty-card"
             id="special-width-empty"
        >
            <VEmptyImg/>
        </div>

        <div v-else class="card">
            <div class="masterCard" v-for="(item , index) in todosArray">
                <VMasterCard
                    :title="todosArray[index]"
                    @delete="deleted(index)"
                    @edited="edited(index)"
                    @checkPoint="checkPointStore(index)"
                />
            </div>
        </div>
        <footer>
            <p>&copy;&nbsp;2026</p>
        </footer>
    </div>
</template>
<script setup lang="js">
    import VMasterCard from '@/components/VMasterCard.vue';
    import VEmptyImg from '@/components/VEmptyImg.vue';
    import { computed, ref } from 'vue';
    import { initialize } from '@/utils/initialize.js';
    import { localSet } from '@/utils/localStorageSet.js';
    import { useTheme } from '@/stores/use.theme.js';

    const myTheme = useTheme();

    const todosArray = ref(initialize('todos', []));
    let id = 0;
    const todosObject = ref({
        title: '',
        completed: false,
        edit: false,
        id: id
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
            todosObject.value.id = id;
            todosArray.value.push({ ...todosObject.value });
            todosObject.value.title = '';
            localSet('todos', todosArray.value);
            id += 1;
        }
    }

    function deleted(index) {
        todosArray.value.splice(index.index, 1);
        localSet('todos', todosArray.value);
    }

    function edited(index) {
        todosArray.value[index].edit = !todosArray.value[index].edit;
        localSet('todos', todosArray.value);
    }

    function checkPointStore(index) {
        todosArray.value[index].completed = !todosArray.value[index].completed;
        localSet('todos', todosArray.value);
        console.log('changes' + index);
    }
</script>