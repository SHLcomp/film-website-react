import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import './Responsive.css';
import MovieCard from './movieCard';

// a43e0c13 api key :)
// calling the api to get the data of the movies:
const API_URL = "http://www.omdbapi.com?apikey=a43e0c13";
// we want to fetch our api data as soon as the page loads, using useEffect hook

const App = () => {
//map over all the movies by creating a new state
  const [movies, setMovies] = useState([]); 
// search state
  const [searchTerm, setSearchTerm] = useState(''); // used '' because the search term at the start is gonna be empty



  //call a function to fetch the movies
  const searchMovies = async (title) => {
    //async is asynchronous data which means it will take time to fetch movies
    const response = await fetch(`${API_URL}&s=${title}`); //inside fetch is a template string
    const data = await response.json(); //fetching the data from the response

    console.log(data.Search); //.search is to con log only the movies array
    setMovies(data.Search); //.search is to con log only the movies array
  }

  //calling useEffect hook, that accepts a callback fun. and an independency arry to call it only at the start
  //calling searchMovies inside useEffect 
  useEffect(() =>{
    searchMovies("spider man");
  }, []); 

  document.getElementById("searchBtn");

  // return a card component, instead of writing many lines
  return (
  <div className="app">
    <h1>Movie Island</h1>

    <div className="search">
      <input
      placeholder='search'
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}
      />
      <button id="searchBtn" onClick={()=>searchMovies(searchTerm)}>search</button>
    </div>

      {/* dynamic block of code to check if movies the movie exists then render it, else render a message that says error msg*/}

      {
        movies?.length > 0 ? (
          <div className="cards container">
          {/* calling the card component, instead of writing tons of cards indiv.. */}
            {/* <MovieCard movie={movies[0]} />  instead of writing this, we want to map over all movies*/}
            {movies.map((movie)=>(
            <MovieCard movie={movie} /> // make sure to add the movie prop
            ))}
        </div>
        ) :
        (
          <div className="empty">
            <h3>No movies found...</h3>
          </div>
        )
      }

  </div>
  )
  
};


//search btn onclick function



export default App;