import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MovieApi(){
    let [movies,setmovies] =useState([])
   
    let getMovie=async (movie)=>
        {
            try{
                let xyz  = movie
                let { data }= await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=ad9394d1&t=${xyz}")
                console.log(data);
                setmovies(data)
            }
            catch(err){
                console.log(err);
            }
        }
        console.log(movies);
        useEffect(()=>
        {
            getMovie()
        },[])

  return (
    <div>
        {/* {movies.map(({avatar_url,id})=>
        {
            return <img height="200px" width="200px" key={id} src={avatar_url} alt=''/>
        })}
        <input type="text" /> */}
    </div>
  )
}

export default MovieApi