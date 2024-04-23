// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/> 
        <Route path='/Services' element={<Services/>}/> 
        
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
