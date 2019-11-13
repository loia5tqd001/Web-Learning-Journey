import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'

const AddMovie = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [, setMovies] = useContext(MovieContext)

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const addMovie = (e) => {
    e.preventDefault()
    setMovies(prevMovies => [...prevMovies, { name, price, id: prevMovies.length }])
    setName('')
    setPrice('')
  }

  return (
    <form onSubmit={addMovie}>
      <input type="text" placeholder="name" name="name" value={name} onChange={updateName} />
      <input type="text" placeholder="price" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  )
}

export default AddMovie