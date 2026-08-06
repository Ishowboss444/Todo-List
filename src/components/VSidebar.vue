<template>
    <aside
        class="aside"
        :id="!darkness.myTheme ? 'dark-aside' : 'light-aside'"
    >
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
                    <img v-if="darkness.myTheme" src="./files/day/menu.svg" alt="Menu">
                    <img v-else src="./files/night/menu 1.svg" alt="Menu">
                </div>
                <div v-if="extendInfo" class="profile-spot">
                    <div class="profile">
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

            <div class="card-close" :id="extendInfo ? 'active-div' : ''">

                <div class="background-of-todo-item">
                    <img src="./files/day/list-todo%201.svg"
                         alt="menuTasks"
                    >
                </div>
                <router-link v-if="extendInfo"
                             class="routes"
                             to="/myTasks"
                >
                    <p v-if="extendInfo">My Tasks</p>
                </router-link>

            </div>

            <div class="card-close">
                <div class="transparent-bg">
                    <img v-if="darkness.myTheme"
                         src="./files/day/menu%20settings.svg"
                    >
                    <img v-else
                         src="./files/night/menu%20settings.svg"
                    >
                </div>
                <router-link
                    class="routes"
                    v-if="extendInfo"
                    to="/SettingView"
                >
                    <p v-if="extendInfo">Setting</p>
                </router-link>
            </div>
        </div>
    </div>
    </aside>
</template>
<script setup>
    import { ref } from 'vue';
    const extendInfo = ref(false);
    import { useTheme } from '@/stores/use.theme.js';
    const darkness = useTheme()
</script>
<style scoped>

</style>

