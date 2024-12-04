# Main App  

This is a main application using **qiankun 2.0** to implement a micro front-end architecture. It serves as a host for two or more sub-apps.  

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
   - Navigates to the **subapp-login** application where users can log in or register.  
   - This page handles user authentication and directs users based on their login status.  

2. **/subapp-dashboard**:   
   - Navigates to the **subapp-dashboard** application.  
   - Access to this page is restricted to authenticated users only. Users must log in to access the dashboard features.  

## MVP Features  

### Version 1 Features  

1. **User Authentication**:  
   - Users can log in or register.  
   - After successful login, users can choose their desired sub-app.  

2. **User Navigation**:  
   - Users can log out, which redirects them to the login page.  
   - Direct access to `/subapp-dashboard` is restricted; users must be logged in to navigate to this route.  

3. **Sub-App Integration**:  
   - Users can dynamically load and interact with various sub-apps within the main application interface.  

## Getting Started  

### Prerequisites  

- Node.js 
- MongoDB (installed locally or use a cloud service)  

### Installation  

1. Clone the repository:  

2. Install the dependencies