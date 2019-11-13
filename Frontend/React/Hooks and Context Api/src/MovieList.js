import React, { useContext } from 'react'
import Movie from "./Movie"
import { MovieContext } from './MovieContext'

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext)

  return (
    <>
      {movies.map(movie => (
        <Movie key={movie.id} {...movie}></Movie>
      ))} 
    </>
  )
}

export default MovieList