import { createStore, useStore } from "react-hookstore"

const CounterStore = createStore("click-counter", 0, reducer)

export const INCREASE_COUNTER = "increase-counter"
export const DECREASE_COUNTER = "decrease-counter"

function reducer(state, action) {

  switch (action.type) {
    case INCREASE_COUNTER:
      return state + action.amount

    case DECREASE_COUNTER:
      return state - action.amount

    default:
      return state
  }
}

export default CounterStore
export { useStore }
