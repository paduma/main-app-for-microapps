import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem("accessToken");

  // console.log("to", to);
  // console.log("from", from);
  // console.log("accessToken", accessToken);

  // 如果访问的是登录应用，并且有 accessToken，重定向到 subapp-dashboard应用
  if (to.path.includes("/subapp-dashboard") && accessToken) {
    next();
  }
  // 如果目标路由不是登录应用且访问令牌不存在，就重定向到 /subapp-login
  else if (!to.path.includes("/subapp-login") && !accessToken) {
    next("/subapp-login"); // 跳转到登录应用
  } else {
    next(); // 继续路由
  }
});

export default router;
