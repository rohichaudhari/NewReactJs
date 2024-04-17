// import logo from './logo.svg';
import './App.css';
import  { useReducer } from 'react';
let initialval=1;
const reducer = (state , action)=>{
  console.log(state,action,"state ,action");
  if(action.type === "increment"){
    return state+1
  }
  if(action.type === "decrement"){
    return state-1
  }
  return state;
}
 
function App() {
  const [state , dispatch]=useReducer(reducer,initialval)
  return (
    <div className="App">
      {state}
      <br/>
      <button onClick={()=>dispatch({type:"increment"})}>increment</button>

      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  );
}

export default App;
