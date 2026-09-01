<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in arrayStore.filterBar"
        :id="item.status ? 'active' : ''"
        :key="item.title"
        @click="changeActiveClassBind(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="js">
//----------import
import { useTodoStore } from "@/stores/todos.js";
import { initialize, localSet } from "@/utils/localStorage";
//--------coding...
const arrayStore = useTodoStore();
const filterIndex = initialize("filterIndex", 0);
arrayStore.activeLog(filterIndex);
function changeActiveClassBind(index) {
  arrayStore.activeLog(index);
  localSet("filterIndex", index);
}
</script>
