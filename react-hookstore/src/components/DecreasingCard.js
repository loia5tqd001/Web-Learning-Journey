import React, { useRef } from "react"
import CounterStore, {
  DECREASE_COUNTER,
  useStore
} from "../stores/CounterStore"

const decreasingCardStyles = {
  padding: 10,
  marginTop: 10,
  backgroundColor: "lightgray",
  color: "black"
}

export default function DecreasingCard() {
  const [state, dispatch] = useStore(CounterStore)
  const inputRef = useRef()

  return (
    <div style={decreasingCardStyles}>
      <h1> Decreasing Card </h1>
      
      <input 
        type="number" 
        ref={inputRef}
        placeholder="Enter amount..." />

      <h2> {state} </h2>

      <button onClick={() => dispatch({ 
        type: DECREASE_COUNTER,
        amount: Number(inputRef.current.value)
      })}>
        Decrease
      </button>

    </div>
  )
}
