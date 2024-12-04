<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Qiankun2.0 SaaS Product Demo</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">消息通知</v-btn>
        </template>
<v-list>
  <v-list-item v-for="item in notifications" :key="item.id">
    <v-list-item-title>{{ item.text }}</v-list-item-title>
  </v-list-item>
</v-list>
</v-menu> -->
      <template v-slot:append>
        <v-btn @click="drawer = true">切换应用</v-btn>
        <v-switch v-model="switchTheme" @click="toggleTheme" :label="themeColorShown" hide-details inset></v-switch>
        <v-btn @click="handleLogout">登出</v-btn>
      </template>
    </v-app-bar>

    <!-- 全屏大抽屉 -->
    <v-dialog v-model="drawer" fullscreen hide-overlay>
      <v-card>
        <v-card-actions>
          <span class="headline">全部应用</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="drawer = false">
            <v-icon color="info" icon="mdi-close" size="medium"></v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-text>
          <v-container fluid>
            <v-row>
              <!-- 左侧：业务领域 -->
              <v-col cols="4" style="
                  border-right: 1px solid #ddd;
                  max-height: 80vh;
                  overflow-y: auto;
                ">
                <v-list>
                  <v-list-item-group v-model="selectedCategory" color="primary">
                    <v-list-item v-for="(category, index) in categories" :key="index" @click="selectCategory(index)">
                      <v-list-item-title>{{ category.name }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>

              <!-- 右侧：子应用 -->
              <v-col cols="8" style="max-height: 80vh; overflow-y: auto">
                <v-list>
                  <v-list-item-group v-if="selectedSubApps.length > 0">
                    <v-list-item v-for="(subApp, subIndex) in selectedSubApps" :key="subIndex"
                      @click="navigateTo(subApp.route)">
                      <v-list-item-title>{{ subApp.name }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                  <v-list-item v-else>
                    <v-list-item-title>选择一个业务领域以查看子应用</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-main>
      <v-container>
        <div v-if="currentApp === 'subapp-dashboard'">
          <!-- 新增subapp-dashboard渲染节点 -->
          <div id="subapp-container" />
        </div>
        <div v-else>
          <h2>默认页面</h2>
          <p>请选择一个应用来查看内容。</p>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { computed, ref, inject } from "vue";
import { useTheme } from "vuetify";
import { useRouter } from "vue-router";

const router = useRouter();

const switchTheme = ref(false);
const theme = useTheme();
const themeColorShown = computed(() => {
  return theme.global.current.value.dark ? "白" : "黑";
});

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  switchTheme.value = true;
}

// 应用状态  
const drawer = ref(false);
const selectedCategory = ref(null);
const currentApp = ref(null);

const categories = [
  {
    name: "业务领域 1",
    subApps: [
      { name: "子应用 1-1", route: "subapp-dashboard" },
      { name: "子应用 1-2", route: "subapp-login" },
    ],
  },
  {
    name: "业务领域 2",
    subApps: [
      { name: "子应用 2-1", route: "subapp-dashboard" },
      { name: "子应用 2-2", route: "subapp-login" },
    ],
  },
  {
    name: "业务领域 3",
    subApps: [
      { name: "子应用 3-1", route: "subapp-dashboard" },
      { name: "子应用 3-2", route: "subapp-login" },
    ],
  },
];

const selectedSubApps = computed(() => {
  if (selectedCategory.value !== null) {
    return categories[selectedCategory.value].subApps;
  }
  return [];
});
// const notifications = [
//   { id: 1, text: "消息 1" },
//   { id: 2, text: "消息 2" },
// ];

// 导航到子应用  
function navigateTo(app) {
  currentApp.value = app; // 更新当前应用  
  router.push(`/${app}`); // 跳转路由  
  drawer.value = false
}

// 选择业务领域  
function selectCategory(index) {
  selectedCategory.value = index; // 选择业务领域  
}

const logout = inject('logout');

// 登出按钮点击事件  
const handleLogout = () => {
  logout(); // 调用提供的 logout 函数  
};
</script>
<style>
/* 添加样式 */
.v-dialog {
  padding: 0;
  /* 使对话框无内边距，以便实现全屏效果 */
}
</style>
