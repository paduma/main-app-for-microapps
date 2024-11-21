import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
import NProgress from "nprogress";
import appsNoToken from "./apps-config/apps-no-token";
import appsNeedToken from "./apps-config/apps-need-token";

import "nprogress/nprogress.css";

// qiankun 生命周期钩子配置
const lifeCycles = {
  beforeLoad: (app: any) => {
    NProgress.start(); // 开始进度条
    return Promise.resolve();
  },
  afterMount: (app: any) => {
    NProgress.done(); // 进度条结束
    return Promise.resolve();
  },
};

// 注册
const microAppStargt = () => {
  const token = localStorage.getItem("token");

  if (token) {
    registerMicroApps(appsNeedToken, lifeCycles);
    setDefaultMountApp("dashboard");
    start();
  }
  registerMicroApps(appsNoToken, lifeCycles);
  start();
};

export { microAppStargt, start };
