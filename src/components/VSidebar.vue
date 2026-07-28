<template>
    <div
            class="HoverControler"
            @mouseenter="extendInfo = true"
            @mouseleave="extendInfo = false"
        >
    <div 
        class="padded-aside"

    >
        <div class="card-close">
            <div class="transparent-bg">
                <img v-if="props.darkness" src="./files/day/menu.svg" alt="Menu">
                <img v-else src="./files/night/menu 1.svg" alt="Menu">
            </div>
            <div v-if="extendInfo" class="profile-spot">
                <div class="profile" >
                    <div class="circle-profile">
                        <div class="radius">
                            <img src="./files/cat.jpg" alt="cat">
                        </div>
                    </div>
                    <div class="text-profile">
                        <h3>Mohammadi</h3>
                        <h5>abolboss1388@gmail.com</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-close" :id="extendInfo ? 'activeDiv' : ''">
            <div class="backgroundOfTodoItem">
                <img src="./files/day/list-todo 1.svg" alt="menuTasks">
            </div>
            <p v-if="extendInfo">My Tasks</p>
        </div>
        <div class="card-close">
            <div class="transparent-bg">
                <img v-if="props.darkness" src="./files/day/menu settings.svg" alt="menuTasks">
                <img v-else src="./files/night/menu settings.svg" alt="menuTasks">
            </div>
            <p v-if="extendInfo">Settings</p>
        </div>
    </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const extendInfo = ref(false) 
const props = defineProps({
    darkness : Boolean
})
</script>
<style scoped>

</style>

