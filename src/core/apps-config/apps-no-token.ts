const apps: any[] = [
  {
    name: "loginApp", // 登录应用
    entry: "http://localhost:9001/", // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
    container: "#site1", // 要渲染到的节点id，对应上一步中src/App.vue中的渲染节点
    activeRule: "/site1", // 访问子节点路由
  },
];
export default apps;