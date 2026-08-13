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
import {arrayManipulation} from "@/stores/use.arrayManipulation.js";

const arrayStore = arrayManipulation()

function changeActiveClassBind(index) {
  arrayStore.activeLog(index)
}

</script>