<template>
  <aside
      class="aside"
      :style="{width: store.asideWide ? '400px' : '130px'}"
      @click.stop="store.widen()"
  >
    <div
        class="HoverControler"
    >
      <div
          class="padded-aside"

      >
        <div class="card-close" >
          <div class="transparent-bg">
            <Menu @click.stop="store.unWiden()"/>
          </div>
          <div v-if="store.asideWide" class="profile-spot">
            <div class="profile">
              <div class="circle-profile">
                <div class="radius">
                  <img :src="settingStore.profile" alt="cat">
                </div>
              </div>
              <div class="text-profile">
                <h3>{{ settingStore.name }}</h3>
                <h5>{{ settingStore.email }}</h5>
              </div>
            </div>
          </div>
        </div>

        <div 
          class="card-close" 
          :class="{'activeNav': active('MyTasksView')}" 
          @click="pushRoute('MyTasksView')"
          >
            <div :class="listTodos.class">
              <ListTodo/>
            </div>
            <p v-if="store.asideWide">My Tasks</p>
          </div>

        <div 
          class="card-close" 
          :class="{'activeNav': active('SettingView')}" 
          @click="pushRoute('SettingView')"
        >
            <div :class="setting.class">
              <SettingsIcon/>
            </div>
            <p v-if="store.asideWide">Setting</p>
          </div>
      </div>
    </div>
  </aside>
</template>
<script setup>
import {useVariableStore} from '@/stores/varables.js';
import {Menu , SettingsIcon , ListTodo} from 'lucide-vue-next'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { useSettingsStore } from '@/stores/settings';
const settingStore = useSettingsStore()
const route = useRoute()
const router = useRouter()
const store = useVariableStore();
function pushRoute(Route){
  router.push({name: Route})
}
const listTodos = ref({
  class:'background-of-todo-item',
  id:'active-div',
  active:true,
})
const setting = ref({
  class:'transparent-bg',
  id:'',
  active:false,
})
function active(routeName){
  return route.name === routeName
}

</script>
