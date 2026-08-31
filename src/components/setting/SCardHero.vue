<template>
    <div class="card-hero">
        <div class="card-hero-icon">
            <component :is="components[component]"></component>
        </div>

        <div class="card-hero-text">
            <h2>{{ firstText }}</h2>
            <p> {{ secondText }}</p>
        </div>
    </div>
</template>
<script setup>
import { User } from 'lucide-vue-next';
const components = {
    User
}
const props = defineProps({
    component: String,
    firstText:String,
    secondText : String,
})
</script>