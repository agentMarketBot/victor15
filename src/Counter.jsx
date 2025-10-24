import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
    }
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="counter">
      <h1 className="counter-display">{count}</h1>
      <div className="counter-buttons">
        <button 
          className="counter-btn increment-btn" 
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button 
          className="counter-btn decrement-btn" 
          onClick={handleDecrement}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button 
          className="counter-btn reset-btn" 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter