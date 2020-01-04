import React from "react"
import "./App.css"
import MovieList from "./MovieList"
import AddMovie from "./AddMovie"
import Nav from "./Nav"
import { MovieProvider } from "./MovieContext"

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  )
}

export default App
