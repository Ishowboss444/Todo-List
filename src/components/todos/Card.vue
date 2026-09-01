<script setup>
import { useTodoStore } from "@/stores/todos";
const props = defineProps({
  todo: Object,
});
const tStore = useTodoStore();
</script>
<template>
  <div class="cards">
    <div class="order-of-cards">
      <input
        v-model="todo.completed"
        type="checkbox"
        class="checkbox"
      >
    </div>
    <div class="order-of-cards">
      <h3
        v-if="!todo.edit"
        :id="todo.completed ? 'completed' : ''"
        class="todo-title"
      >
        {{ todo.title }}
      </h3>

      <input
        v-else
        v-model="todo.title"
        class="editor-input"
        type="text"
        required
        @keyup.enter="tStore.editTask(todo.id)"
      >
    </div>
    <div class="icons order-of-cards">
      <i
        class="fa-regular fa-pen-to-square"
        @click="tStore.editTask(todo.id)"
      />
    </div>
    <div class="icons order-of-cards">
      <i
        class="fa-regular fa-trash-can"
        @click="tStore.ommitTask(todo.id)"
      />
    </div>
  </div>
</template>
