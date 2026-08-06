<script setup>
    import VSidebar from './components/VSidebar.vue';
    import { useTheme } from '@/stores/use.theme.js';
    const theme = useTheme()
</script>

<template>
    <div class="under-control">
            <VSidebar/>
        <div
            class="main-section"
            :id="!theme.myTheme? 'dark' : 'light'"
        >
            <router-view></router-view>
        </div>

    </div>
</template>
