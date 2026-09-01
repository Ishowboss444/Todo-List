import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { initialize, localSet } from "@/utils/localStorage.js";
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
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  function addTask(title) {
    const rawDate = new Date();
    const date = formatDate(rawDate);
    if (!title.trim()) {
      toast.error("Make sure ,You have filled out Precisely");
      return;
    }
    tasks.value.unshift({
      title: title,
      edit: false,
      state: "On progress",
      description: "no description",
      completed: false,
      date: date,
      id: tasks.value.length,
    });
  }
  function ommitTask(id) {
    const indexFounder = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(indexFounder, 1);
  }
  function editTask(newVal = false) {
    if (!newVal) {
      alert("wrong input for edit");
      return;
    }
    const indexFounder = tasks.value.findIndex((task) => task.id === newVal.id);
    tasks.value[indexFounder].description = newVal.description;
    tasks.value[indexFounder].title = newVal.title;
    tasks.value[indexFounder].date = newVal.date;
    tasks.value[indexFounder].state = newVal.state;
    toast.success("successfully changed");
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
  function indexFinder(id) {
    return tasks.value.findIndex((task) => task.id === id);
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
    indexFinder,
  };
});
