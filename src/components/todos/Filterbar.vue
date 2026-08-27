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
import { initialize, localSet } from "@/utils/localStorage";

const arrayStore = todos()
const filterIndex = initialize('filterIndex' , 0)
arrayStore.activeLog(filterIndex)
function changeActiveClassBind(index) {
  arrayStore.activeLog(index)
  localSet('filterIndex' , index)
}

</script>