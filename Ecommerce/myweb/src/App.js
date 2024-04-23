import logo from './logo.svg';
import './App.css';
 import Header from './Component/Header';
 
 import Home from './Component/Home';
 import Categories from './Component/Categories';
 import Products from './Component/Products';
 import Folded from './Component/Folded';
 import Follow from './Component/Follow';
 import Footer from './Component/Footer';
import '../src/Style.css';
import Header_2 from './Component/Header-2';

function App() {
  return (
    <div className="App">
      {/* <FontAwesomeIcon/> */}
        <Header/>
        <Header_2/>
        <Home/>
        <Categories/>
        
        <Products/>
       
        <Folded/>
        <br></br>
        <Follow/>
        <br></br>
        <Footer/>
    </div>
        
  );
}

export default App;
