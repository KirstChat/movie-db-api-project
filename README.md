# The Movie Database API Project

This is a collaborative project with [Libby Henry](https://github.com/LibbyH52). The aim of the project was to create an application using some basic React fundamentals and an API of our choosing. The API used in this project is [The Movie Database API](https://www.themoviedb.org/documentation/api).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Design

![TMDB App Basic Wireframe](src/img/tmdb-wireframe.png)

## Features

- View the top 20 trending movies
- Filter movies by certification, genre and streaming service
- Search for movies
- View movie details including title, overview, release date, runtime, user score and top billed cast

## Cloning the Repository

To clone the repository and make a local copy on your computer, follow these steps:

- Open [GitHub](https://github.com/) and locate the GitHub repository: [https://github.com/KirstChat/movie-db-api-project](https://github.com/KirstChat/movie-db-api-project)
- Under the repository name, click **"Code"** and copy the link to clone the repository using **"HTTPS"**
- After copying the link, open a terminal on your computer - this step can also be done in the terminal in your preferred IDE or Code Editor
- Change the current working directory to the location where you want the cloned directory to be saved
- Type `git clone`, and then paste the URL: [https://github.com/KirstChat/movie-db-api-project.git](https://github.com/KirstChat/movie-db-api-project.git)
- Press Enter to create a local clone
- Open the terminal and run `npm install` to install required packages
- If you are unable to install packages, download and install [Node.js](https://nodejs.org/en/)
- To run the app in development mode, run the `npm start` command in the terminal

To add your own TMDB API Key, follow these steps:

- Open [TMDB](https://www.themoviedb.org/) and sign up for an account
- After signing up for account, open account settings which can be found under your profile
- Open the API settings and request an API key (this is free to use)
- In the repo, create an environment variable file: `.env.local`
- Add the variable `REACT_APP_API_KEY='YOUR API KEY'`

## Credits

- [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [react-select Documentation](https://react-select.com/home)
- [React Front to Back](https://www.udemy.com/course/modern-react-front-to-back/)
- [How to use Axios with React](https://www.freecodecamp.org/news/how-to-use-axios-with-react/)
- [Get Requests in React using Async/Await](https://dev.to/redeyemedia/get-requests-in-react-using-async-await-7jd)
- [Text Gradient with Font Awesome](https://stackoverflow.com/questions/12732663/text-gradient-with-font-awesome)
- [SearchFilter Component](https://www.youtube.com/watch?v=n02t9wvd6hs)
- [Importing Select options from API](https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3)
- [Getting Started with react-select](https://www.youtube.com/watch?v=n02t9wvd6hs)
- [useHistory Hook](https://v5.reactrouter.com/web/api/Hooks)
- [Utils.js](https://stackoverflow.com/questions/32888728/correct-way-to-share-functions-between-components-in-react)
- [Placeholder Image](https://placeholder.com/)
