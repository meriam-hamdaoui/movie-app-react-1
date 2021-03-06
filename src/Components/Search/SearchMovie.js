import React from "react";
import "./SearchMovie.css";
import Rating from "../rates/Rating";

function SearchMovie({ setSearchByTitle, setSearchByRating, searchByRating }) {
  return (
    <div className="SearchMovie">
      <div className="search-container">
        <div className="search-title">
          <div className="divTitle">
            <span className="searchTxt">Title Filtering</span>
          </div>

          {/* <input
            type="text"
            placeholder="title ..."
            onMouseOut="document.search.txt.value = ''"
            onChange={(e) => setSearchByTitle(e.target.value)}
          /> */}
          <div className="box">
            <form name="search">
              <input
                className="input"
                type="text"
                name="txt"
                onChange={(e) => setSearchByTitle(e.target.value)}
              />
            </form>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="search-rating">
          <span className="searchTxt">Rate Filtering</span>
          <Rating setSearchByRating={setSearchByRating} rate={searchByRating} />
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;

// import React from 'react';
// import './SearchMovie.css';
// import Rating from '../rates/Rating';

// function SearchMovie({setSearchByTitle, setSearchByRating,searchByRating}) {
//   return (
//     <div>
//         <div className='search-container'>
//             <input type="text"
//                 placeholder='Search for a movie ...'
//                 onChange={(e) => setSearchByTitle(e.target.value)}/>
//             <Rating setSearchByRating={setSearchByRating} rate={searchByRating}/>
//         </div>
//     </div>
//   )
// }

// export default SearchMovie;
