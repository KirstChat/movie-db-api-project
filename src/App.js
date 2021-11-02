import React from 'react';
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";

function App() {
  const getData = async () => {
    const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;

    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data);
  };

  getData();

  return (
    <div>
      <Header />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
