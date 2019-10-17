import React, { useState, createContext } from "react"
export const MovieContext = createContext()

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Porter",
      price: "$10",
      id: 23124
    },
    {
      name: "Game Of Thrones",
      price: "$10",
      id: 256614
    },
    {
      name: "Inception",
      price: "$15",
      id: 23524
    }
  ])
  
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}
