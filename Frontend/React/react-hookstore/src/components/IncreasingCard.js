import React, { useRef } from "react"
import CounterStore, {
  INCREASE_COUNTER,
  useStore
} from "../stores/CounterStore"

const increasingCardStyles = {
  padding: 10,
  backgroundColor: "navy",
  marginTop: 10,
  color: "white"
}

export default function IncreasingCard() {
  const [state, dispatch] = useStore(CounterStore)
  const inputRef = useRef()
  
  return (
    <div style={increasingCardStyles}>
      <h1> Increasing Card </h1>

      <input 
        type="number" 
        ref={inputRef} 
        placeholder="Enter amount..." />

      <h2> {state} </h2>

      <button onClick={() => dispatch({
        type: INCREASE_COUNTER,
        amount: Number(inputRef.current.value)
      })}>
        Increase
      </button>

    </div>
  )
}
