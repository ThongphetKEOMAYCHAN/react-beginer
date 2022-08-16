import './App.css';
import { react, useState } from "react"
import Index from "./components/Index";
function App() {
  const [name, setName] = useState(0);
  const [firtname, setFirtname] = useState("");
  const [username, setUsername] = useState("");
  const [personData, setPersonData] = useState([
    {
    name: "Sua",
    tel: "022522",
    },
    {
    name: "Sua",
    tel: "022522",
    }

  ])
  const [dataObj, setDataObj] = useState([
     "Sua",
    "022522",
  ])
  console.log("dataObj", personData);
  
  const style = {
    color: 'red'
  }
  return (
    <div className="App">
      number when you click {name}
      <button onClick={() => setName(name + 3)}>click</button>
      
      <input type="text" value={firtname}
        onChange={(e) => setFirtname(e.target.value )} /><br></br>
      
      <input type="text" value={username}
        onChange={(e) => setUsername(e.target.value )} />
      
      <h1>your name: {firtname}</h1>
      <h1>your username: {username}</h1>
      <Index />
      
      {dataObj.map((row, index)=> <p style={style}>{index + row }</p>)}
    </div>
  );
}

export default App;
