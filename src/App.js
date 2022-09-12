import { useState, useEffect } from "react";
import SearchIcon from "../src/search.svg"
import MovieCard from "./components/MovieCard";

//api key:  fa036fab

const API_URL = 'http://www.omdbapi.com?apikey=fa036fab'

const App = () =>
{
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(() =>
  {
    searchFilms("Batman")
  }, [])

  const searchFilms = async (title) => 
  {
    const req = await fetch(`${API_URL}&s=${title}`)
    const res = await req.json()
    console.log(res.Search)
    setMovies(res.Search)
  }

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <div className="search">
        <input placeholder='Search for a film' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchFilms(searchTerm)} />
      </div>
      {movies?.length > 0 ?
        (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}></MovieCard>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies to Display</h2>
          </div>
        )
      }
    </div>
  )
}

export default App;