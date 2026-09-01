<template>
  <div class="profile-setting-header">
    <div class="p-s-header-item-1">
      <span
        class="svg-span"
        @click="back"
      >
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
import { useRouter } from "vue-router";

const router = useRouter();
function back() {
  router.back();
}
</script>
