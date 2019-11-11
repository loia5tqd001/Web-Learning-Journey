import React from "react"

const Movie = ({ name, price }) => {
  return (
    <>
      <h3>Movie name: {name}</h3>
      <p>Price: {price}</p>
    </>
  )
}

export default Movie
