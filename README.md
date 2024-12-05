English | [简体中文](./README.zh.md)
# Main App  

This main application uses **qiankun 2.0** to implement a micro front-end architecture. It serves as a host for two or more sub-applications. For its back-end, see [koa-websocket](https://github.com/paduma/koa-websocket).  

## Tech Stack  

- **Micro Front-End Framework**: qiankun 2.0  
- **Frontend**:  
  - Vue.js  
  - Vue Router  
  - Vuetify  
- **Backend**:  
  - Koa  
  - MongoDB / Mongoose  

## Routes  

1. **/subapp-login**:   
   - Navigates to the **subapp-login** application, where users can log in or register.  
   - This page handles user authentication and directs users based on their login status.  

2. **/subapp-dashboard**:   
   - Navigates to the **subapp-dashboard** application.  
   - Access to this page is restricted to authenticated users only. Users must log in to access the dashboard features.  

## MVP Features  

### Version 1 Features  

1. **User Authentication**:  
   - After starting the database, the backend service (koa-websocket), and the subapps ([subapp-login](https://github.com/paduma/subapp-login-for-microapps) and subapp-dashboard), users can log in or register.  
   - After a successful login, users can choose their desired sub-app.  

2. **User Navigation**:  
   - Users can log out, which redirects them to the login page.  
   - Direct access to `/subapp-dashboard` is restricted; users must be logged in to navigate to this route.  

3. **Sub-App Integration**:  
   - Users can dynamically load and interact with various sub-apps within the main application interface.  

## Getting Started  

### Prerequisites  
- Node.js (Recommended version 18.20.3)  
- Vue CLI (optional)  

### Installation Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/paduma/main-app-for-microapps 
   cd main-app-for-microapps  
2. Install denpencies:
    ```bash
    npm i
3. Start the application:
  To ensure the application runs on the correct port, use the following command to start the application:
    ```bash
    npm run serve -- --port 8080
4. Open the application in your browser:
  Visit http://localhost:8080 to view the app.

### Contributing
If you wish to contribute to this project, please follow these steps:

1. Fork this repository.
Create a new feature branch (git checkout -b feature-branch-name).
2. Commit your changes (git commit -am 'Add new feature').
3. Push to the branch (git push origin feature-branch-name).
4. Submit a Pull Request.
### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
Thanks to the Vue.js and Vuetify communities for their tools and resources.
Special thanks to the Qiankun team for their contributions to microfrontend frameworks.