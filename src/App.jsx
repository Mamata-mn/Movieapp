import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MovieApi from './assets/MovieApi'
import FetchMovie from './assets/FetchMovie'
import FetchMovieApi from './assets/FetchMovieApi'
import MovieApi from './assets/MovieApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FetchMovie/>
     {/* <FetchMovieApi/>  */}
    {/* <MovieApi/> */}
    </>
  )
}

export default App
