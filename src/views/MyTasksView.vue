<template>
  <div class="header">
    <span class="darkness" @click="store.themeChanger()">
      <Sun v-if="store.theme === 'dark'" />
      <Moon v-else />
    </span>
  </div>
  <div class="central-holder">
    <div class="logo">
      <h1>My Tasks</h1>
    </div>
    <form class="search-section">
      <div class="search">
        <input
          type="text"
          class="search"
          placeholder="Type your task here..."
          v-model="title"
        />
        <input
          type="submit"
          value="+ Add"
          class="add-button"
          @click.prevent="
            tStore.addTask(title);
            title = '';
          "
        />
      </div>
      <div v-if="tStore.filtered" class="filter-bar">
        <VFilterBar />
      </div>
    </form>
    <div v-if="!tStore.filtered" class="empty-card" id="special-width-empty">
      <VEmptyImg />
    </div>

    <div v-else class="card">
      <div class="master-card" v-for="item in tStore.filtered" :key="item.id">
        <VCard :todo="item" />
      </div>
    </div>
    <footer>
      <p>&copy;&nbsp;2026</p>
    </footer>
  </div>
</template>
<script setup lang="js">
//--------components
import VCard from "@/components/todos/Card.vue";
import VEmptyImg from "@/components/todos/Empty.vue";
import VFilterBar from "@/components/todos/Filterbar.vue";
//--------import
import { ref } from "vue";
import { useVariableStore } from "@/stores/varables.js";
import { useTodoStore } from "@/stores/todos.js";
import { Sun, Moon } from "lucide-vue-next";
//---------------coding...
const store = useVariableStore();
const tStore = useTodoStore();
const title = ref("");
tStore.resetEdit();
</script>
