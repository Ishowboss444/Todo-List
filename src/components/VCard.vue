<script setup>
    import { defineEmits } from 'vue';

    const props = defineProps({
        todo: Object
    });

    const emits = defineEmits(['deleteSensor', 'editeSensor', 'checkPointSensor']);

    function deleteSender() {
        emits('deleteSensor');
    }

    function editSender() {
        emits('editeSensor');
    }

    function checkPoint() {
        emits('checkPointSensor');
    }

</script>
<template>
    <div class="cards">
        <div class="order-of-cards">
            <input
                @click="checkPoint()"
                type="checkbox"
                class="checkbox"
                v-model="props.todo.completed">
        </div>
        <div class="order-of-cards">
            <h3
                class="todo-title"
                v-if="!props.todo.edit"
                :id="props.todo.completed ? 'completed' : ''"
            >{{ props.todo.title }}</h3>
            <input v-else class="editor-input" type="text" v-model="props.todo.title">
        </div>
        <div class="icons order-of-cards">
            <i
                @click="editSender()"
                class="fa-regular fa-pen-to-square"
            ></i>
        </div>
        <div class="icons order-of-cards">
            <i
                @click="deleteSender()"
                class="fa-regular fa-trash-can"
            ></i>
        </div>
    </div>
</template>