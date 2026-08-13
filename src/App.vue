<script setup>
import VSidebar from './components/VSidebar.vue';
import {useGlobalVariable} from '@/stores/use.global.variable.js';

const store = useGlobalVariable();
</script>

<template>
  <div class="under-control">
    <VSidebar/>
    <div
        class="main-section"
        :id="!store.myTheme? 'dark' : 'light'"
        @click="store.unWiden()"
    >
      <router-view></router-view>
    </div>

  </div>
</template>
