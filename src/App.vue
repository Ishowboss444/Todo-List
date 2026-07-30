<script setup>
    import VSidebar from './components/VSidebar.vue';
    import { useTheme } from '@/stores/use.theme.js';
    const theme = useTheme()
</script>

<template>
    <div class="underControl">

        <aside
            class="aside"
            :id="!theme.myTheme ? 'dark-aside' : 'light-aside'"

        >
            <VSidebar :darkness="theme.myTheme"/>
        </aside>

        <div
            class="main-section"
            :id="!theme.myTheme? 'dark' : 'light'"
        >
            <router-view></router-view>
        </div>

    </div>
</template>
