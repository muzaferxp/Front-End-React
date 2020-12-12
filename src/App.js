import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
// import VerticalLinearStepper from "./components/stepper"
//import OutlinedButtons from "./components/buttons"

function App() {
  const [data, setdata] = useState("");

  useEffect(() => {
    fetch('/data').then(res => res.json()).then(data => {
      setdata(data.data);
    });
  }, []);

  return (
    <div className="App">
       <Header  name="Adam" />    
        <h3>Data from flask</h3>
       
          <hr />  
          {data.split(",").map((item,index)=>{
            return <li className='card' key={index}>{item}</li>
        })}


      
    </div>
  );
}

export default App;