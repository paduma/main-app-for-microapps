[English](./README.md) | 简体中文
# 主应用  

这个主应用使用 **qiankun 2.0** 实现微前端架构。它作为两个或多个子应用的宿主。有关其后端，请参见 [koa-websocket](https://github.com/paduma/koa-websocket)。  

## 技术栈  

- **微前端框架**: qiankun 2.0  
- **前端**:  
  - Vue.js  
  - Vue Router  
  - Vuetify  
- **后端**:  
  - Koa  
  - MongoDB / Mongoose  

## 路由  

1. **/subapp-login**:   
   - 导航到 **subapp-login** 应用，用户可以在此登录或注册。  
   - 此页面处理用户身份验证并根据其登录状态引导用户。  

2. **/subapp-dashboard**:   
   - 导航到 **subapp-dashboard** 应用。  
   - 该页面的访问仅限于经过身份验证的用户。用户必须登录才能访问仪表板功能。  

## 最小可行产品功能  

### 版本 1 功能  

1. **用户身份验证**:  
   - 在启动数据库、后端服务 [koa-websocket](https://github.com/paduma/koa-websocket) 以及 [subapp-login](https://github.com/paduma/subapp-login-for-microapps) 和 subapp-dashboard 后，用户可以登录或注册。
   - 成功登录后，用户可以选择所需的子应用。  

2. **用户导航**:  
   - 用户可以注销，注销后会被重定向到登录页面。  
   - 直接访问 `/subapp-dashboard` 被限制；用户必须登录才能导航到该路由。  

3. **子应用集成**:  
   - 用户可以在主应用界面中动态加载和交互各种子应用。  

## 开始使用  
### 先决条件  
- Node.js (推荐版本: 18.20.3)  
- Vue CLI (可选)  

### 安装步骤  
1. **克隆项目:**  
   ```bash  
   git clone https://github.com/paduma/main-app-for-microapps  
   cd main-app-for-microapps 
2. **安装依赖:**
   ```bash
   npm install  
3. **启动应用:**
   为确保应用运行在正确的端口，请使用以下命令：
   ```bash
   npm run serve -- --port 8080  
4. **在浏览器中打开应用:**
访问 http://localhost:8080 查看应用。

## 贡献
   如果您希望为该项目做出贡献，请遵循以下步骤：
1. Fork 该仓库。
   创建一个新的功能分支:
   ```bash
   git checkout -b feature-branch-name  
2. 提交更改:
   ```bash
   git commit -am 'Add new feature'  
3. 推送到分支:
   ```bash
   git push origin feature-branch-name  
   提交 Pull Request。
## 许可证
该项目使用 MIT 许可证 - 具体内容请参见 LICENSE 文件。

## 鸣谢
感谢 Vue.js 和 Vuetify 社区提供的工具和资源。
特别感谢 Qiankun 团队对微前端框架的贡献。