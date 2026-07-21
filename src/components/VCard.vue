<script setup>
const props = defineProps({
  title: Object
})
const emits = defineEmits(['delete' , 'edited'])
function deleteSender(index) {
  emits('delete', {index: index})
}
function editSender(index){
  emits('edited', {index: index})
}
</script>
<template>
  <div class="masterCard" v-for="(item , index) in props.title">
    <div class="cards">
      <div class="order-of-cards">
        <input type="checkbox">
      </div>
      <div class="order-of-cards">
        <h3 v-if="!item.edit">{{item.title}}</h3>
        <input v-else class="EditorInput" type="text" v-model="item.title">
      </div>
      <div class="icons order-of-cards">
        <i
            @click="editSender(index); item.edit = !item.edit ;console.log(item.edit)"
            class="fa-regular fa-pen-to-square"
        ></i>
      </div>
      <div class="icons order-of-cards">
        <i
            @click="deleteSender(index)"
            class="fa-regular fa-trash-can"
        ></i>
      </div>
    </div>
  </div>
</template>