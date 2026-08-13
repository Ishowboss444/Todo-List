<template>
  <div class="header">
                <span class="darkness" @click="store.themeChanger()">
                    <img v-if="store.myTheme" src="../components/files/day/moon 1.svg" alt="sun">
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
      <input type="submit" value="+ Add" class="add-button" @click.prevent="adder()"/>
    </form>
    <div v-if="!isEmpty" class="filter-bar">
      <VFilterBar/>
    </div>
    <div v-if="isEmpty"
         class="empty-card"
         id="special-width-empty"
    >
      <VEmptyImg/>
    </div>

    <div v-else class="card">
      <div class="master-card" v-for="(item , index) in filtered" :key="item.id">
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
import {computed, ref} from 'vue';
import {initialize} from '@/tools/initialize.js';
import {localSet} from '@/utils/localStorageFundamentals.js';
import {useGlobalVariable} from '@/stores/use.global.variable.js';
import VFilterBar from '@/components/VFilterbar.vue';
import {arrayManipulation} from "@/stores/use.arrayManipulation.js";

const store = useGlobalVariable();
const arrayStore = arrayManipulation()
const todosArray = ref(initialize('todos', []));
const filtered = computed(() => {
  if (arrayStore.filterBar[0].status) {
    return todosArray.value
  } else if (arrayStore.filterBar[1].status) {
    return todosArray.value.filter(item => !item.completed)
  } else if (arrayStore.filterBar[2].status) {
    return todosArray.value.filter(item => item.completed)
  }

})
const todosObject = ref({
  title: '',
  completed: false,
  edit: false,
  id: null
});
const isEmpty = computed(() => {
  return todosArray.value.length <= 0;
});

function adder() {
  if (todosObject.value.title === '') {
    alert('complete the input');
  } else {
    todosObject.value.id = todosArray.value.length;
    todosArray.value.push({...todosObject.value});
    todosObject.value.title = '';
    localSet('todos', todosArray.value);
  }
}

function deleted(id) {
  todosArray.value.splice(id, 1);
  if (todosArray.value.length === 0) {
    arrayStore.activeLog(0)
  }
  localSet('todos', todosArray.value);
}

function edited(index) {
  let edit = todosArray.value[index];
  edit.edit = !edit.edit;
  localSet('todos', todosArray.value);
}

function checkPointStore(index) {
  let completed = todosArray.value[index];
  completed.completed = !completed.completed;
  localSet('todos', todosArray.value);
}
</script>