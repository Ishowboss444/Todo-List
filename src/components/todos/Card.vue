<script setup>
import { useTodoStore } from '@/stores/todos';
const props = defineProps({
  todo:Object
})
const tStore = useTodoStore()
</script>
<template>
  <div class="cards">
    <div class="order-of-cards">
      <input
          type="checkbox"
          class="checkbox"
          v-model="todo.completed">
    </div>
    <div class="order-of-cards">
      <h3
          class="todo-title"
          v-if="!todo.edit"
          :id="todo.completed ? 'completed' : ''"
      >{{ todo.title }}</h3>

      <input v-else class="editor-input" @keyup.enter="tStore.editTask(todo.id)" type="text" v-model="todo.title" required>
    </div>
    <div class="icons order-of-cards">
      <i
          @click="tStore.editTask(todo.id)"
          class="fa-regular fa-pen-to-square"
      ></i>
    </div>
    <div class="icons order-of-cards">
      <i
          @click="tStore.ommitTask(todo.id)"
          class="fa-regular fa-trash-can"
      ></i>
    </div>
  </div>
</template>