import { Slider } from './Slider';
import './App.css';
import React, { useState } from 'react';

import { Steps } from './Data';

function App() {
  // const [data, setData] = useState([]);
  // const settingData = (obj)=>{
  //   setData([...data,obj])
  // }
  const [currentIndex, setCurrentIndex] = useState(0)
  

  const _handleIndexChange = (index) => {
    setCurrentIndex(currentIndex + 1);
  };
  

  // const _handleComplete = () => {
  //   console.log({...data})
  //   alert("check res in console.log")
  //   setData([]);
  // };
  const Step  = Steps[currentIndex]
  return (
    <div className="App">
      <h1>Eden</h1>
      <div>
        <Slider currentIndex={currentIndex} />
      </div>
      <Step _handleIndexChange= {_handleIndexChange} />
    </div>
  );
}

export default App;
