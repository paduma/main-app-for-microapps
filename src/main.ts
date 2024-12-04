import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { microAppStart } from "@/core/apps-register";
import vuetify from "@/plugins/vuetify"; // 引入此处的 vuetify 配置

microAppStart();

const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify); // 使用 vuetify
app.mount("#app");
