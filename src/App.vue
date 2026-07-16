<script setup>
import { computed, reactive, ref,watch } from 'vue';
import VSidebar from './components/VSidebar.vue';
import VCard from './components/VCard.vue';
const isDark = ref(true)
const todosArray = ref([])
const id = ref(0)
const todosObject = ref({
    title : "",
    completed : false,
    Edit :false,
    id:id.value,
})
const isEmpty = computed(()=>{
    if(todosArray.value.length > 0){
        return false
    }else{
        return true
    }
})
function adder(){
    if(todosObject.value.title === ""){
        alert("complete the input")
        return
    }else{
        todosObject.value.id = id.value
        todosArray.value.push({...todosObject.value})
        todosObject.value.title = ''
        id.value += 1
    }
}
function theme(){
    isDark.value = !isDark.value
}
function test(index){
    console.log(index.id);
    todosArray.value.splice(index.index,1)
}
</script>

<template>
    <aside class="aside"
    >
     <VSidebar/>
    </aside>

    <div class="main-section">
      <div class="header">
        <span class="darkness"
         @click="theme"
         ><i :class="isDark ?
         'fa-regular fa-sun' :
         'fa-regular fa-moon'"
          ></i>
        </span>
      </div>
      <div class="central-holder">
      <div class="logo">
        <h1>My Tasks</h1>
      </div>
      <div class="search-section">
        <input type="text"
        class="search" 
        placeholder="Type your task here..." 
        v-model="todosObject.title"
        >
        
        <button @click="adder()">+ Add</button>
      </div>
      
      <div v-if="isEmpty" 
      class="empty-card" 
      @click="test"
      >empty</div>
      
      <div v-else class="card">
        <VCard 
        :title="todosArray"
        @delete="test"
        />
      </div>

      </div>
    </div>
</template>
