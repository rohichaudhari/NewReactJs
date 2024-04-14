// import logo from './logo.svg';
import './App.css';
import "../src/Component/Style.css"
import React,{useState} from 'react';
function App() {
  const [Incriment,setCount]=useState(1)
  const [Decriment,setDcount]=useState(1)
  const Inc =()=>{
   setCount(Incriment+1);
  }
  const Dnc =()=>{
   setDcount(Decriment-1);
  }
  return (
    
       <div className="App ">
      <div className='demo-1'>
        <h1>{Incriment}</h1>
        <button onClick={Inc}>CLICK-1</button>
      </div>
      <div className='demo-2'>
        <h1>{Decriment}</h1>
        <button onClick={Dnc}>CLICK-2</button>
      </div>
    </div>
    
  );
}

export default App;
