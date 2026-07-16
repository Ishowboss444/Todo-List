<script setup>
import VSidebar from './components/VSidebar.vue';
</script>

<template>
    <aside class="aside">
     <VSidebar/>
    </aside>
    <div class="main-section">
      <div class="header">
        <span class="darkness" @click="theme"><i :class="isDark ? 'fa-regular fa-sun' : 'fa-regular fa-moon'"></i></span>
      </div>
      <div class="logo">
        <h1>My Tasks</h1>
      </div>
    </div>
</template>

<style scoped>
    
</style>
