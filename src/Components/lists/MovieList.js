import React from "react";
import './MovieList.css';
import MovieCard from "../cards/MovieCard";
import AddMovie from "../add/AddMovie";


const MovieList = ({movies, setMovies, searchByTitle,searchByRating}) => {
    
    const addToList = (film) => {
        setMovies([...movies, film])
    }

    return (
        <div className="MovieList">
            {movies.filter(movie => movie.title.toLowerCase().includes(searchByTitle.toLowerCase()) && movie.rating >= searchByRating)
            .map((movie,index) => 
               <MovieCard key={index} 
                    movie={movie}/>
            )}
            <AddMovie addToList={addToList}/>
        </div>
    )
}
export default MovieList;