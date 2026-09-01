<script setup>
import { Toaster } from "vue-sonner";
import VSidebar from "./components/VSidebar.vue";
import Edit from "./components/Edit.vue";
import { useVariableStore } from "@/stores/varables.js";
import { useTodoStore } from "./stores/todos.js";

const store = useVariableStore();
const todo = useTodoStore();

document.documentElement.dataset.theme = store.theme;
</script>

<template>
  <div
    class="under-control"
    :class="store.focusBlur ? 'blurSystem' : ''"
    :inert="store.focusBlur"
  >
    <VSidebar />
    <div class="main-section">
      <router-view />
    </div>
  </div>
  <Toaster />

  <Edit
    v-if="store.edit"
    :todo="todo.tasks[store.editId]"
  />
</template>
<style scoped>
.blurSystem {
  filter: blur(2px);
}
</style>
