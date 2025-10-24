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
    <div className="counter-container">
      <h1 className="counter-title">Simple Counter</h1>
      <div className="counter-display">
        <h2 className="count-value">{count}</h2>
      </div>
      <div className="counter-controls">
        <button 
          className="counter-btn increment-btn" 
          onClick={handleIncrement}
          aria-label="Increment counter"
        >
          +1
        </button>
        <button 
          className="counter-btn decrement-btn" 
          onClick={handleDecrement}
          disabled={count === 0}
          aria-label="Decrement counter"
        >
          -1
        </button>
        <button 
          className="counter-btn reset-btn" 
          onClick={handleReset}
          aria-label="Reset counter"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter