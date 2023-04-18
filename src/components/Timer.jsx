import React from 'react';
import './timer.scss';
import { useEffect, useState } from 'react';

const Timer = () => {

    const [sec,setSec]=useState(0);
    const [min,setMin]=useState(0);
    const [hr,setHr]=useState(0);
    const [isActive,setIsActive]=useState(false);
  
    let time=null;
  
    useEffect(()=>{
       if (isActive){
     time=setInterval(()=>{
      setSec(sec+1)
      if(sec===59){
        setMin(min+1)
        setSec(0)
      }
      if(min===59){
        setHr(hr+1)
        setMin(0)
        setSec(0)
      }
      },1000)
    }
      return ()=> clearInterval(time)
    });
  
  const reset=()=>{
    setSec(0);
    setMin(0);
    setHr(0);
    setIsActive(false);
  };
  
  // const stop=()=>{
  //   setIsActive(false)
  //   // clearInterval(time)
  // };
  
  const start=()=>{
    setIsActive(!isActive)
    setSec(sec+1)
  };

  return (
    <div className='app'>
    <div className='time'>
      <h3>Digital Timer</h3>
      <h2>{hr<10?"0"+hr:hr}:{min<10?"0"+min:min}:{sec<10?"0"+sec:sec}</h2>
      </div>
      <div className='row'>
        <button className='button' id='button-reset' onClick={reset}>Reset</button>
        {/* <button onClick={stop}>Stop</button> */}
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={start}>{isActive ? 'Pause' : 'Start'}</button>
      </div>
    </div>
  )
};

export default Timer;