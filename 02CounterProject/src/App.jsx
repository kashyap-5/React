import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{
    if(count < 20)setCount(count + 1);
    else alert("Count cannot exceed 20");
  }

  const removeValue = () =>{
    if(count > 0)setCount(count - 1);
    else alert("Count cannot be less than 0");
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={addValue}>Add Value {count}</button>
      <button onClick={removeValue}>Remove Value {count}</button>
    </>
  )
}

export default App
