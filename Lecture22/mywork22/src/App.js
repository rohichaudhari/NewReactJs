// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Documentation from './Component/Documentation';
import Plugins from './Component/Plugins';
import Demoes from './Component/Demoes';
import Overview from './Component/Overview';
import Element from './Component/Element';
import Navbar from './Navbar/Navbar';
import Error from './Component/Error';
function App() {
  return (
    <div className="App">
      {/* <Overview/>
      <Element/>
      <Demoes/>
      <Plugins/>
      <Documentation/> */}

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/element' element={<Element/>}/>
        <Route path='/demoes' element={ <Demoes/>}/>
        <Route path='/plugins' element={<Plugins/>}/>
        <Route path='/documentation' element={ <Documentation/>}/>
        <Route path='*' element={<Error/>}/>

       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
