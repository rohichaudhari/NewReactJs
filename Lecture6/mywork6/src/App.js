// import logo from './logo.svg';
import './App.css';
import Props from './Component/Props';
import Card from './Component/Card';
import img1 from './Image/image-3.jpg';
import img2 from './Image/image-3.jpg';
import img3  from './Image/image-3.jpg'

function App() {
  return (
    <div className="App">
      <Props title="Card Demo"/>
      <div className='Card flex justify-center items-center justify-around'>
      <Card  img={img1} name="John doe" descr="lorem ipsum is free words given without paying fees on vs code type short word lorem"/>
      <Card  img={img2} name="John doe" descr="lorem ipsum is free words given without paying fees on vs code type short word lorem"/>
      <Card img={img3} name="John doe" descr="lorem ipsum is free words given without paying fees on vs code type short word lorem"/>
      </div>
    </div>
  );
}

export default App;
