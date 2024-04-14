import logo from './logo.svg';
import './App.css';
import Ternary1 from './Component/Ternary1';
import Ternary2 from './Component/Ternary2';

function App() {
  return (
    <div className="App">
     {(true)?<Ternary1/>:<Ternary2/>}
    </div>
  );
}

export default App;
