<script setup>
    const props = defineProps({
        title: Object
    });

    const emits = defineEmits(['delete', 'edited','checkPoint']);

    function deleteSender() {
        emits('delete');
    }

    function editSender() {
        emits('edited');
    }
    function checkPoint(){
        emits('checkPoint')
    }

</script>
<template>
        <div class="cards">
            <div class="order-of-cards">
                <input
                    @click="checkPoint()"
                    type="checkbox"
                    class="checkbox"
                    v-model="props.title.completed">
            </div>
            <div class="order-of-cards">
                <h3
                    class="todo-title"
                    v-if="!props.title.edit"
                    :id="props.title.completed ? 'completed' : ''"
                >{{ props.title.title }}</h3>
                <input v-else class="EditorInput" type="text" v-model="props.title.title">
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