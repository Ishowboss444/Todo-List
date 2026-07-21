<script setup>
import {ref, watch} from "vue";

const onEdit = ref(true)
watch(onEdit , ()=>{
  console.log(onEdit.value)
})
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
        <input class="EditorInput" type="text" v-model="item.title"
               :id="onEdit ? 'disabled' : 'enabled'"
               :disabled="onEdit">
      </div>
      <div class="icons order-of-cards">
        <i
            @click="editSender(index); onEdit = !onEdit"
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