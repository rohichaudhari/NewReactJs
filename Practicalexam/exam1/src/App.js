// import logo from './logo.svg';
import './App.css';
import Home from '../src/Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Login from './Component/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <About/>
      <Contact/>
      <Login/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
