import React, {useState} from 'react';
import './App.css';
import Search from './Components/search/Search';
import MovieList from './Components/lists/MovieList';
import Movies from './Movies';


function App() {
  //states for our movies components
  const [movies, setMovies] = useState(Movies);
  //state for the search component
  const [searchTerm, setSearchTerm] = useState({searchTerm: ''});
 
  

  //a function gonna handle the inputs inside the search field
  const handleInput = (e) =>{
    //event listner
    let searchTerm = e.target.value;
    //setState to modifier our state within the input
    setSearchTerm(prevState => {
      return {...prevState, searchTerm: searchTerm}
    });
    
  }

  //search handler to use the value in filtring names
  const serchHandler = () => {}

  return (<div className='App'>
    <Search  handleInput={handleInput}/>
    {/* btn add movie redirect to Add.js */}
    <h1>My Movie list</h1>
    <MovieList movies={movies}
              term={searchTerm}
              serchKeyword={serchHandler}/>     
  </div>);}

export default App;