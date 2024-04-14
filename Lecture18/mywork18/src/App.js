// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {useRef} from 'react'

function App() {
  const refElement = useRef("");
  console.log(refElement);
  const [name ,setName]  = useState("Rohini")
 
  function Reset(){
    setName("")
    refElement.current.focus()
    refElement.current.style.color="white";
    refElement.current.style.backgroundColor="blue";
  }

  return (
    <div className="App">
      <h1>Learn useRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
