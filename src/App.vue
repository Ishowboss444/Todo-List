<script setup>
import { Toaster } from "vue-sonner";
import VSidebar from "./components/VSidebar.vue";
import { useVariableStore } from "@/stores/varables.js";
const store = useVariableStore();
document.documentElement.dataset.theme = store.theme;
</script>

<template>
  <div class="under-control">
    <VSidebar />
    <div class="main-section">
      <router-view></router-view>
    </div>
  </div>
  <Toaster />
</template>
