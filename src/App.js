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
  const _handleIndexChange = (index) => {
    setCurrentIndex(currentIndex + 1);
  };

  const Step  = Steps[currentIndex]
  return (
    <div className="App">
      <h1>Eden</h1>
      <div>
        <Slider currentIndex={currentIndex} />
      </div>
      <Step 
        _handleIndexChange= {_handleIndexChange} 
        handleDataChange={handleDataChange}
        name ={data.name} 
      />
    </div>
  );
}

export default App;
