<template>
  <div>
    <ul>
      <li v-for="(item,index) in arrayStore.filterBar"
          :key="item.title"
          :id="item.status? 'active' : '' "
          @click="changeActiveClassBind(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="js">
import {todos} from "@/stores/todos.js";

const arrayStore = todos()

function changeActiveClassBind(index) {
  arrayStore.activeLog(index)
}

</script>