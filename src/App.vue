<script setup>
import { Toaster } from 'vue-sonner';
import VSidebar from './components/VSidebar.vue';
import {useGlobalVariable} from '@/stores/varables.js';
const store = useGlobalVariable();
document.documentElement.dataset.theme = store.theme 
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
  <Toaster/>
</template>
