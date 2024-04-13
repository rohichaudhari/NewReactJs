import logo from './logo.svg';
import './App.css';
import Cardprops from './Component/Cardprops';
import Card from './Component/Card';
function App() {
  return (<>
    <div className="App flex justify-around">
        {Card.map((cvalue,ind,array)=>{
            console.log(cvalue,"cvalue");
            return <Cardprops key={ind} Name={cvalue.Name} description={cvalue.description} image={cvalue.image}/>
        })}
    </div>
    <div className="App flex justify-around mt-5">
        {Card.map((cvalue,ind,array)=>{
            console.log(cvalue,"cvalue");
            return <Cardprops key={ind} Name={cvalue.Name} description={cvalue.description} image={cvalue.image}/>
        })}
    </div>
  </>
  );
}

export default App;
