import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loader from "./Loader";
import Footer from "./Footer";
function App() {
  const [movies, setMovies] = useState([]);
  const [showmovies, setShowmovies]=useState(true)
  const [inputTerm, setinputTerm] = useState();
  const [showLoader, setShowloader]=useState(false)
  const [searchTerm, setSearchTerm] = useState("general");
  const API_URL = `https://www.omdbapi.com/?apikey=3be83424&s=`;
  const searchMovies = async (title) => {
    setShowloader(true);
    setShowmovies(false)
    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setShowloader(false);
    setShowmovies(true)
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);
  return (
    <>
    <section className="app">
      <h1>MoviesSearch</h1>
      <p className="results">This is an open source movie search tool 
      that shows only info of any movie,drama or show.You cannot download any content from here!
       </p>
      <div className="search">
        <input
          type="text"
          value={inputTerm}
          onChange={(e) => setinputTerm(e.target.value)}
        />
        <button onClick={(()=>setSearchTerm(inputTerm))}>Search</button>
      </div>
      {showLoader && <Loader/>}
      {showmovies && movies?.length>0 ? (
         <div className="container">
         {movies.map((movie) => (
           <MovieCard movie={movie} />
         ))}
       </div>
      ) : (
        <div className="container">
          <h2>No Results Found for this search</h2>
        </div>
      )}
    </section>
    <Footer/>

    </>
  );
}

export default App;
