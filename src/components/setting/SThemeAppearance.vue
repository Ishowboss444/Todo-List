<script setup lang="js">
import { useVariableStore } from "@/stores/varables";
import { Check, Monitor, Moon, Palette, Sun } from "lucide-vue-next";
import { ref } from "vue";
import { toast } from "vue-sonner";

const store = useVariableStore();
const accents = ref([
  {
    backgroundColor: "#020100",
    accent: "primary",
    id: 0,
  },
  {
    backgroundColor: "#2462fc",
    accent: "secondry",
    id: 1,
  },
  {
    backgroundColor: "#653df3",
    accent: "thirdly",
    id: 2,
  },
  {
    backgroundColor: "#1bbd75",
    accent: "fourthly",
    id: 3,
  },
  {
    backgroundColor: "#fc800e",
    accent: "fifthly",
    id: 4,
  },
  {
    backgroundColor: "#f54866",
    accent: "sixthly",
    id: 5,
  },
]);
</script>

<template>
  <div class="appearance-card setting-card">
    <div class="appearance-introduction">
      <div class="a-p-i-logo">
        <span class="svg-span">
          <Palette />
        </span>
      </div>
      <div class="a-p-i-text">
        <h1>Appearance</h1>
        <p>Customize the look and feel of the application</p>
      </div>
    </div>

    <div class="appearance-theme">
      <p>Theme</p>
      <div class="a-th-themes">
        <div
          :class="{ 'active-theme': store.theme === 'light' }"
          @click="store.themeChanger()"
        >
          <Check
            v-if="store.theme === 'light'"
            class="a-th-themes-active"
          />
          <Sun />
          light
        </div>
        <div
          :class="{ 'active-theme': store.theme === 'dark' }"
          @click="store.themeChanger()"
        >
          <Check
            v-if="store.theme === 'dark'"
            class="a-th-themes-active"
          />
          <Moon />
          Dark
        </div>
        <div
          :class="{ 'active-theme': store.theme === 'system' }"
          @click="toast.warning('This option will be accessable soon!')"
        >
          <Check
            v-if="store.theme === 'system'"
            class="a-th-themes-active"
          />
          <Monitor />
          Sysytem
        </div>
      </div>
    </div>

    <div class="appearance-accent">
      <p>Accent Color</p>
      <div class="a-a-accents">
        <button
          v-for="accent in accents" :key="accent.id"
          :style="{ background: `${accent.backgroundColor}` }"
          @click="store.accentToggel(accent.accent)"
        >
          <Check v-if="store.accent === accent.accent" />
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
