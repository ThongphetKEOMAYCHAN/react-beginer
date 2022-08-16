import React, { useState,useEffect } from 'react'
import Dashboard from './Dashboard';
import Child from './Child'
function Index() {
     const [alert, setAlert] = useState("");
     const [checkLogin, setCheckLogin] = useState(true);
     const [data, setData] = useState("");
     const handle = () => {
          setAlert("text");
     }
     useEffect(() => {
          if (data) {
               setData("Welcome to me");
          } else {
               setData("Please login");
          }
     }, [])
     return (
       <div>
         <button onClick={handle}>click alert</button>
         <p>{alert}</p>
         <button>click me</button>

               {/* <p>{checkLogin ? "Welcome" : "please login"}</p> */}
         <p>{data}</p>
               <Dashboard firstName="Yee lang" lastName="Lee" />
               
               <Child render= "Thong"/>
       </div>
     );
}

// function Child(props) {
//      return <h2>My name is: {props.render}</h2>;
// }
export default Index;