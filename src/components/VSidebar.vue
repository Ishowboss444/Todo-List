<template>
    <div
        class="padded-aside"
        @mouseenter="asideHover = true"
        @mouseleave="asideHover = false"
        :id="!asideHover ? 'afterHover' : ''"
    >
        <div class="card-close">
            <div class="profile-spot">
                <i class="fa-solid fa-bars"></i>
                <div class="profile" v-if="asideHover" >
                    <div class="circle-profile">
                        <img src="./files/cat.jpg" alt="cat">
                    </div>
                </div>
                <div v-if="asideHover" >
                    <h3>Mohammadi</h3>
                    <p>abolboss1388@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="card-close">
            <i class="fa-solid fa-bars"></i>
            <p  v-if="asideHover">My Tasks</p>
        </div>
        <div class="card-close">
            <i class="fa-solid fa-gear"></i>
            <p  v-if="asideHover">Settings</p>
        </div>
    </div>
</template>
<script setup lang="js">
    import { ref, watch } from 'vue';

    const asideHover = ref(false);
    watch(asideHover, () => {
        console.log(asideHover.value);
    });
</script>