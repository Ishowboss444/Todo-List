<script setup lang="js">
import { useTodoStore } from "@/stores/todos";
import { useVariableStore } from "@/stores/varables";
import { X, Check } from "lucide-vue-next";
import { ref } from "vue";
import { toast } from "vue-sonner";
const store = useVariableStore();
const tStore = useTodoStore();
const props = defineProps({
  todo: Object,
});

const newValue = ref({
  title: props.todo.title,
  description: props.todo.description,
  date: props.todo.date,
  state: props.todo.state,
  id: props.todo.id,
});
function submit() {
  if (!newValue.value.title.trim()) {
    toast.error("fill it precisely");
    return;
  }
  store.editToggel();
  store.blurtoggel();
  tStore.editTask(newValue.value);
}
</script>

<template>
  <section class="edit-master">
    <form
      class="edit-form"
      @submit.prevent="submit()"
    >
      <div class="edit-header">
        <h1 class="text-4xl">
          Edit Task
        </h1>
        <span
          @click="
            store.editToggel();
            store.blurtoggel();
          "
        >
          <X />
        </span>
      </div>
      <div class="edit-second-header">
        <h3>Update the detail of your task below</h3>
      </div>
      <div class="edit-changes">
        <div class="edit-changes-title">
          <label for="title">Task</label>
          <input
            v-model="newValue.title"
            type="text"
            class="edit-input"
            required
          >
        </div>
        <div class="edit-changes-description">
          <label for="description">Description (Optional)</label>
          <textarea v-model="newValue.description" />
        </div>
        <div class="edit-changes-state">
          <label for="completed">State</label>
          <div>
            <select v-model="newValue.state">
              <option value="Stoted">
                Stoped
              </option>
              <option value="Completed">
                Completed
              </option>
              <option value="On progress">
                On progress
              </option>
            </select>
          </div>
        </div>
        <div class="edit-changes-date">
          <label for="date">Due Date (Optional)</label>
          <div>
            <input
              v-model="newValue.date"
              type="date"
            >
          </div>
        </div>
      </div>
      <div class="edit-save">
        <button type="button"
          @click="
            store.editToggel();
            store.blurtoggel();
          "
        >
          <p class="text-2xl">
            Cancel
          </p>
        </button>
        <button type="submit">
          <span><Check /></span>
          <p class="text-2xl">
            Save Changes
          </p>
        </button>
      </div>
    </form>
  </section>
</template>
