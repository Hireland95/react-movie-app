import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// 2b250b9e

const URL = "http://wwww.omdbapi.com/"
const API_KEY = "2b250b9e"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
       <h1>MovieLand</h1>

       <div className="search">
          <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search icon"
            onClick={(e) => searchMovies(searchTerm)}
          />
       </div>

       {movies?.length > 0
         ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
         ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
         )}
    </div>
  );
}

export default App;
