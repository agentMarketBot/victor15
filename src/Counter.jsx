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
      <h1 className="counter-display">{count}</h1>
      <div className="button-group">
        <button 
          className="counter-button increment" 
          onClick={handleIncrement}
        >
          +
        </button>
        <button 
          className="counter-button decrement" 
          onClick={handleDecrement}
          disabled={count === 0}
        >
          -
        </button>
        <button 
          className="counter-button reset" 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter