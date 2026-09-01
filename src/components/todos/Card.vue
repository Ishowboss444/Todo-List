<script setup>
import { useTodoStore } from "@/stores/todos";
import { useToggel } from "@/composable/toggle.js";
import { useVariableStore } from "@/stores/varables.js";

const store = useVariableStore();
const tStore = useTodoStore();
const props = defineProps({
  todo: Object,
});

function edit(id) {
  const index = tStore.indexFinder(id);
  store.editIdChange(index);
  store.editToggel();
  store.blurtoggel();
}
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
        :id="todo.completed ? 'completed' : ''"
        class="todo-title"
      >
        {{ todo.title }}
      </h3>
    </div>
    <div class="icons order-of-cards">
      <i
        class="fa-regular fa-pen-to-square"
        @click="edit(todo.id)"
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
