import axios from 'axios'
import React, { useEffect, useState } from 'react'


function FetchMovieApi(apiUrl,title) {

let [apidata,setapidata]=useState([])
console.log(apidata)
let [isloading,setisloading]=useState(false)
let [iserror,setiserror]=useState(false)

let getApi=async()=>{
  try{
    let {data}=await axios.get(apiUrl)
    console.log(data)

    setapidata(data)

    setisloading(false)

  }catch{
    setiserror(true)
    setisloading(false)

  }
}
useEffect(()=>{
    setisloading(true)
  getApi()
},[title])

  return (
    {apidata,iserror,isloading}
  )
}

export default FetchMovieApi