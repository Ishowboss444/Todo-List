<template>
  <div class="profile-setting-header">
    <div class="p-s-header-item-1">
      <span class="svg-span" @click="back">
        <ArrowLeft />
      </span>

      <h1>Profile</h1>
    </div>
    <div class="p-s-header-item-2">
      <p>Manage your profile Information and account prefrences</p>
    </div>
  </div>
</template>
<script setup>
import { ArrowLeft } from "lucide-vue-next";
import { useRouter, useRoute } from "vue-router";
import SCardHero from "./SCardHero.vue";

const route = useRoute();
const router = useRouter();
function back() {
  router.back();
}
</script>
<style scoped>
.profile-setting-header {
  background-color: transparent;
  margin-top: 1.5rem;
  .p-s-header-item-1 {
    display: flex;
    gap: 10px;
    align-items: center;
    .svg-span {
      padding: 10px 10px 10px 0;
    }
    svg {
      width: 25px;
      height: 25px;
      color: var(--text);
    }
  }
  h1 {
    color: var(--text);
    font-size: 1.9rem;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    font: 300;
    line-height: 40px;
    color: var(--second-text);
  }
}
</style>
