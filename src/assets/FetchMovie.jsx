import React, { useState } from 'react';
import FetchMovieApi from './FetchMovieApi';
import "../assets/FetchMovie.css"

function FetchMovie() {
  const [title, setTitle] = useState("");
  // console.log(title)
  
  const getMovie = ({ target: { value } }) => {
    setTitle(value);
  };

  const apiKey = "9626eac9";
  const { apidata, iserror, isloading } = FetchMovieApi(`https://omdbapi.com/?s=${title}&apikey=${apiKey}`, title);
  // console.log(apidata);

  return (
    <>
      <div className='movies'>
      <div className='inputname'>
        <h1>{isloading && "Loading..."}</h1>
        <h1>{iserror && "Error..."}</h1>
        <input type="text" placeholder='Enter your movie name' onChange={getMovie} />
      </div>
      <div className='moviename'>
        {apidata?.Search?.map(({ imdbID, Title,Poster }) => (
          <div className='movieposter' key={imdbID}>
            <h4>{Title}</h4>
            <img src={Poster} alt="" height="250px" width="250px" />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default FetchMovie;