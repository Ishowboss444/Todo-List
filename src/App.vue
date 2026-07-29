<script setup>
    import { computed, ref, watch } from 'vue';
    import VSidebar from './components/VSidebar.vue';
    import VCard from './components/VCard.vue';
    import VEmptyImg from '@/components/VEmptyImg.vue';
    import { initialize } from './utils/initialize.js';
    import { localGet } from './utils/localStorageGet.js';
    import { localSet } from './utils/localStorageSet.js';
    const isDark = ref(initialize("theme" , false))
    const todosArray = ref(initialize('todos' , []));
    const textPosition = ref(false)
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
            localSet("todos" , todosArray.value)
            id += 1;
        }
    }

    function theme() {
        console.log(isDark.value);
        if(isDark.value === false){
            localStorage.setItem('theme' , true)
        }else if(isDark.value === true){
            localSet('theme' , false)   
        }
        isDark.value = localGet('theme')
    }

    function deleted(index) {
        todosArray.value.splice(index.index, 1);
        localSet("todos" , todosArray.value)
    }

    function edited(index) {
        console.log(todosArray.value[index.index].title);
    }
</script>

<template>
    <div class="underControl">
        <aside
            class="aside"
            :id="!isDark ? 'dark-aside' : 'light-aside'"
            @mouseenter="textPosition = true"
            @mouseleave="textPosition = false"

        >
            <VSidebar :darkness="isDark"/>
        </aside>

        <div
            class="main-section"
            :id="!isDark ? 'dark' : 'light'"
        >
            <div class="header">
                <span class="darkness"@click="theme">
                    <img v-if="isDark" src="./components/files/day/moon 1.svg" alt="sun">
                    <img v-else src="./components/files/night/sun 1.svg" alt="moon">
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
                    <VCard
                        :title="todosArray"
                        @delete="deleted"
                        @edited="edited"
                    />
                </div>
                <footer>
                    <p>&copy;&nbsp;2026</p>
                </footer>
            </div>
        </div>
    </div>
</template>
