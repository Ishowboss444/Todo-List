<script setup>
    import VSidebar from './components/VSidebar.vue';
    import { useTheme } from '@/stores/use.theme.js';

    const store = useTheme();
</script>

<template>
    <div class="under-control">
        <VSidebar/>
        <div
            class="main-section"
            :id="!store.myTheme? 'dark' : 'light'"
            @click="store.asideWideness()"
        >
            <router-view></router-view>
        </div>

    </div>
</template>
