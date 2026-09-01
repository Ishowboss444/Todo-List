import { initialize, localSet } from "@/utils/localStorage";
import { ref } from "vue";

export function useToggel(init = false, localStorage = undefined) {
  const state = ref(init);
  if (localStorage) {
    initialize(localStorage, state.value);
  }
  const toggel = () => {
    state.value = !state.value;
    if (localStorage) {
      localSet(localStorage, state.value);
    }
  };
  return [state, toggel];
}
