import { Slider } from './Slider';
import './App.css';
import React, { useState } from 'react';

import { Steps } from './Data';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data,setData] = useState({
    name:"",
    username:"",
    url:"",
    workspace:""
  })
  const handleDataChange = (event) =>{
    const name = event.target.name
    setData({
      ...data,
      [name]: event.target.value
    })
  }
  const _handleIndexChange = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handeleIndex = (index)=>{
    setCurrentIndex(index)
  }
  const handleSubmit = () =>{
    alert("Data saved successfully. Please check console")
    console.log(data)
  }

  const Step  = Steps[currentIndex]
  return (
    <div className="App">
      <h1>Eden</h1>
      <div>
        <Slider 
          currentIndex={currentIndex} 
          onChange={handeleIndex} 
        />
      </div>
      <Step 
        _handleIndexChange= {_handleIndexChange} 
        handleDataChange={handleDataChange}
        name ={data.name}
        onSubmit = {handleSubmit} 
      />
    </div>
  );
}

export default App;
