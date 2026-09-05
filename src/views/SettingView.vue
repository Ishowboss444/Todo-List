<template>
  <div class="test">
    <SProfileInformation />
    <SSettingProfile/>
    <SThemeAppearance/>

  </div>
</template>
<script setup lang="js">
import SProfileInformation from "@/components/setting/SProfileInformation.vue";
import SSettingProfile from "@/components/setting/SSettingProfile.vue";
import SThemeAppearance from "@/components/setting/SThemeAppearance.vue";
</script>
<style scoped>
.test {
  padding: 0.5rem 1rem;
}
</style>
