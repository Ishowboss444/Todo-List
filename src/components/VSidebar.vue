<template>
    <aside
        class="aside"
        :id="!store.myTheme ? 'dark-aside' : 'light-aside'"
        :style="{width: store.asideWide ? '400px' : '130px'}"
        @click="store.asideWideness()"
    >
        <div
            class="HoverControler"
        >
            <div
                class="padded-aside"

            >
                <div class="card-close">
                    <div class="transparent-bg">
                        <img v-if="store.myTheme" src="./files/day/menu.svg" alt="Menu">
                        <img v-else src="./files/night/menu 1.svg" alt="Menu">
                    </div>
                    <div v-if="store.asideWide" class="profile-spot">
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

                <div class="card-close" :id="store.asideWide ? 'active-div' : ''">

                    <div class="background-of-todo-item">
                        <img src="./files/day/list-todo%201.svg"
                             alt="menuTasks"
                        >
                    </div>
                    <router-link v-if="store.asideWide"
                                 class="routes"
                                 to="/myTasks"
                    >
                        <p>My Tasks</p>
                    </router-link>

                </div>

                <div class="card-close">
                    <div class="transparent-bg">
                        <img v-if="store.myTheme"
                             src="./files/day/menu%20settings.svg"
                             alt="setting"
                        >
                        <img v-else
                             src="./files/night/menu%20settings.svg"
                             alt="setting"
                        >
                    </div>
                    <router-link
                        class="routes"
                        v-if="store.asideWide"
                        to="/SettingView"
                    >
                        <p>Setting</p>
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

    const store = useTheme();

</script>


