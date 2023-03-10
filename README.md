# Web-sovelluskehitys 2
Ryhmä 3 (R3)

Ryhmän jäsenet:  <br />
Riku Koski @Arbit3r (ProtectedRoute, Front-end callback, back-end),  <br />
Fatlum Gerguri @Vikingi22 (Front-end, Modal, Validation, Form),  <br />
Hussein AL-Bayati @Hussein3030 (Back-end, Sessios, Cookies, Authentications, Database, JWT),  <br />
Niko Ahonen @tyyppi355 (Animation)

# Rest API

###  POST /register
res null
###  POST /login
res {auth: true, token: token, result: result} <br />
err {auth: false, message: 'wrong email/password'}, {auth: false, message: 'No user exists'}, {err: err}
###  GET  /isUserAuth
res true <br />
err 403 status number
###  GET  /data
res {
"user_Id": ,
"Title": " ",
"Date": " ",
"Description": " ",
"Subtask": ,
"Completed": "",
"id": 
} <br />
err 403 status number
###  POST /InsertData
res true <br />
err 403 status number
###  POST /UpdateData
res true <br />
err 403 status number
###  POST /Delete
res true <br />
err 403 status number



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
=======
# todo
>>>>>>> e15cffccc1987dc7aec222e2dd9563e4f412fe11
