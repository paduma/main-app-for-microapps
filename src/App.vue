<template>
  <HomeLayout v-if="hasToken">
    <!-- <v-main>
      <router-view></router-view>
    </v-main> -->
  </HomeLayout>
  <div id="subapp-login" />
</template>
<script setup>
import { ref, computed, provide } from "vue";
import { useRouter } from "vue-router";
import HomeLayout from "@/layout/HomeLayout.vue";

const token = ref(localStorage.getItem("accessToken"));
const hasToken = computed(() => !!token.value);

const router = useRouter();

const logout = () => {
  token.value = null; // 设置 token 为 null，触发计算属性更新
  localStorage.removeItem("accessToken");
  router.push("/subapp-login");
};

// 提供一个方法，以便于在 HomeLayout 中调用
provide("logout", logout);
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
