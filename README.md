# User Management Dashboard  

A web application for managing users, allowing users to view, add, edit, and delete user details. The application interacts with JSONPlaceholder API as a mock backend.  

## Features  
### User Interface:
- Displays a list of users with details such as ID, First Name, Last Name, Email,
and Department.
- Buttons or links to "Add", "Edit", and "Delete" users.
- A form to input details of a new user or edit details of an existing user.
Backend Interaction:
- Uses JSONPlaceholder, a free online REST API for
demonstration and test purposes.
- Specifically, uses the '/users' endpoint to fetch and manipulate user data.
### Functionality:
- View: Displays all users by fetching data from the '/users' endpoint.
- Add: Allows adding a new user by posting to the '/users' endpoint. (Note:
JSONPlaceholder won't actually add the user, but will simulate a successful
response.)
- Edit: Allows editing an existing user. This involves fetching the current
data for a user, allowing for edits, and then putting the updated data back via
the API.
- Delete: Allows users to be deleted, by sending a delete request to the API.
### Error Handling:
- Handles scenarios where the API request might fail - shows an error message to
the user in such cases.
### Some Other Features:
- Added client-side validation for the user input form. 

## Deployed Website  
The application has been deployed and can be accessed at:  
https://user-dashboard-lakshay-bindlish.netlify.app/

## Tech Stack  
- Frontend: React, HTML, CSS, JavaScript  
- API Calls: Axios  
- Notifications: React-Toastify  

## Installation & Setup  

### Clone the repository  
```
git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard/frontend
```

### Install dependencies  
```
npm install
```

### Start the application  
```
npm start
```
The app will run at http://localhost:3000/  

## API Integration  
This project uses JSONPlaceholder as a mock backend for user data.  

### Note on Department Field  
The JSONPlaceholder API does not provide a department field. Instead, the company name field has been used in place of the department. Mock data could have been used, but for the scope of this assignment, using the company name field was a practical choice.  

## Challenges Faced  
- Handling API limitations – Since JSONPlaceholder does not provide a department field, a workaround was required by using the company name field.   
- Popup model management – Ensuring proper opening and closing of the model without affecting other UI elements required careful event handling.    

## Future Improvements  
- Implement actual backend with database instead of using a mock API.  
- Add user authentication and authorization for better security.  
- Improve UI with better responsiveness and design enhancements.  
- Implement pagination or infinite scrolling for better user experience with large datasets.  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
