import { ref } from "vue";

export function useAuth() {
  const hasToken = ref(!!localStorage.getItem("accessToken"));

  return {
    hasToken,
  };
}
