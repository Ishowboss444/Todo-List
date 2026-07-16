<script setup>
    const props = defineProps({
        title: Object
    })
    const emit = defineEmits(['delete'])
    function indexSender(index){
        emit('delete', {index:index,id:1})
    }
</script>
<template>
    <div  class="masterCard" v-for="(item , index) in props.title">
        <div class="cards">
            <div class="order-of-cards">
                <input type="checkbox">
            </div>
            <div class="order-of-cards">
                <h3 :class="props.title[index].completed?
                'lined' : ''">{{ props.title[index].title }}</h3>
            </div>
            <div class="icons order-of-cards">
                <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <div class="icons order-of-cards">
                <i 
                @click="indexSender(index)"
                class="fa-regular fa-trash-can"
            ></i>
            </div>
        </div>
    </div>
</template>