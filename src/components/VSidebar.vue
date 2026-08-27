<template>
  <aside
      class="aside"
      :style="{width: store.asideWide ? '400px' : '130px'}"
      @click="store.widen()"
  >
    <div
        class="HoverControler"
    >
      <div
          class="padded-aside"

      >
        <div class="card-close">
          <div class="transparent-bg">
            <Menu />
          </div>
          <div v-if="store.asideWide" class="profile-spot">
            <div class="profile">
              <div class="circle-profile">
                <div class="radius">
                  <img src="./files/cat.jpg" alt="cat">
                </div>
              </div>
              <div class="text-profile">
                <h3>Mohammadi</h3>
                <h5>abolboss1388@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="card-close" :id="store.asideWide ? listTodos.id : ''" @click="pushRoute('MyTasksView')">
            <div :class="listTodos.class">
              <ListTodo/>
            </div>
            <p v-if="store.asideWide">My Tasks</p>
          </div>

        <div class="card-close" :id="store.asideWide ? setting.id : ''" @click="pushRoute('SettingView')">
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
import {useGlobalVariable} from '@/stores/varables.js';
import {Menu , SettingsIcon , ListTodo} from 'lucide-vue-next'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useGlobalVariable();
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
</script>


