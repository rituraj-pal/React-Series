import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCount]=useState(10)

  // let count=6
  const addValue=()=>{
count =count +1;
console.log("value added ",count)
setCount(count)
  }

  const subValue=()=>{
   count--;
   setCount(count);
  }
 

  return (
    <>
    <h1>Code With React</h1>
    <h2>Counter value: {count}</h2>

    <button onClick={addValue}>Add Value {count}</button>
   <br />
    <button onClick={subValue}>Sub Value {count}</button>
    <p>  header:{count}</p>

      
    </>
  )
}

export default App
