<script setup>
    import { computed, ref } from 'vue';
    import VSidebar from './components/VSidebar.vue';
    import VCard from './components/VCard.vue';
    import VEmptyImg from '@/components/VEmptyImg.vue';

    const isDark = ref(true);
    const todosArray = ref([]);
    const id = ref(0);
    const todosObject = ref({
        title: '',
        completed: false,
        edit: false,
        id: id.value
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
            todosObject.value.id = id.value;
            todosArray.value.push({ ...todosObject.value });
            todosObject.value.title = '';
            id.value += 1;
        }
    }

    function theme() {
        isDark.value = !isDark.value;
    }

    function deleted(index) {
        todosArray.value.splice(index.index, 1);
    }

    function edited(index) {
        console.log(todosArray.value[index.index].title);
    }
</script>

<template>
    <aside
        class="aside"
        :id="!isDark ? 'dark-aside' : 'light-aside'"
    >
        <VSidebar/>
    </aside>

    <div
        class="main-section"
        :id="!isDark ? 'dark' : 'light'"
    >
        <div class="header">
        <span class="darkness"
              @click="theme"
        ><i :class="!isDark ?
            'fa-regular fa-sun isDark' :
            'fa-regular fa-moon'"
        ></i>
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
</template>
