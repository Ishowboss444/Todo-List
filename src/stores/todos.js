import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { initialize, localSet } from "@/utils/localStorage.js";
import { Edit } from "lucide-vue-next";
import { walk } from "vue/compiler-sfc";
import { toast } from "vue-sonner";

export const useTodoStore = defineStore("array", () => {
  const filterBar = ref([
    {
      title: "All",
      status: true,
    },
    {
      title: "Active",
      status: false,
    },
    {
      title: "Completed",
      status: false,
    },
  ]);

  function activeLog(val) {
    if (val === 0) {
      filterBar.value[0].status = true;
      filterBar.value[1].status = false;
      filterBar.value[2].status = false;
    } else if (val === 1) {
      filterBar.value[0].status = false;
      filterBar.value[1].status = true;
      filterBar.value[2].status = false;
    } else if (val === 2) {
      filterBar.value[0].status = false;
      filterBar.value[1].status = false;
      filterBar.value[2].status = true;
    }
  }

  const tasks = ref(initialize("tasks", []));
  const filtered = computed(() => {
    if (tasks.value.length < 1) {
      return false;
    }
    if (filterBar.value[0].status) {
      return tasks.value;
    } else if (filterBar.value[1].status) {
      return tasks.value.filter((item) => !item.completed);
    } else if (filterBar.value[2].status) {
      return tasks.value.filter((item) => item.completed);
    }
  });

  function addTask(title) {
    if (!title.trim()) {
      toast.error("Make sure ,You have filled out Precisely");
      return;
    }
    tasks.value.unshift({
      title: title,
      edit: false,
      completed: false,
      id: tasks.value.length,
    });
  }
  function ommitTask(id) {
    const indexFounder = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(indexFounder, 1);
  }
  function editTask(id) {
    const indexFounder = tasks.value.findIndex((task) => task.id === id);
    if (!tasks.value[indexFounder].title.trim()) {
      toast.warning(
        'Make sure you fill out then save it ,unless it would save as "No filled"',
      );
      tasks.value[indexFounder].title = "No filled";
    }

    const editFounder = tasks.value[indexFounder];
    editFounder.edit = !editFounder.edit;
  }
  function resetEdit() {
    for (let i = 0; i < tasks.value.length; i++) {
      tasks.value[i].edit = false;
    }
  }
  function checkTask(id) {
    const indexFounder = tasks.value.findIndex((task) => task.id === id);
    const checkFounder = tasks.value[indexFounder];
    checkFounder.completed = !checkFounder.completed;
  }
  watch(
    tasks,
    (newVal) => {
      localSet("tasks", newVal);
    },
    { deep: true },
  );
  return {
    filterBar,
    activeLog,
    tasks,
    filtered,
    addTask,
    ommitTask,
    editTask,
    checkTask,
    resetEdit,
  };
});
