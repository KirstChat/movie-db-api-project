# The Movie Database API Project

This is a collaborative project that uses the [TMDB API](https://www.themoviedb.org/documentation/api).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Cloning the Repository

To clone the repository and make a local copy on your computer, follow these steps:

- Open [GitHub](https://github.com/) and locate the GitHub repository: [https://github.com/KirstChat/movie-db-api-project](https://github.com/KirstChat/movie-db-api-project)
- Under the repository name, click **"Code"** and copy the link to clone the repository using **"HTTPS"**
- After copying the link, open a terminal on your computer - this step can also be done in the terminal in your preferred IDE or Code Editor
- Change the current working directory to the location where you want the cloned directory to be saved
- Type `git clone`, and then paste the URL: [https://github.com/KirstChat/movie-db-api-project.git](https://github.com/KirstChat/movie-db-api-project.git)
- Press Enter to create a local clone
- Open the terminal and run `npm install` to install any dependencies required

To add your own TMDB API Key, follow these steps:

- Open [TMDB](https://www.themoviedb.org/) and sign up for an account
- After signing up for account, open account settings which can be found under your profile
- Open the API settings and request an API key (this is free to use)
- In the repo, create an environment variable file: `.env.local`
- Add the variable `REACT_APP_API_KEY='YOUR API KEY'`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
