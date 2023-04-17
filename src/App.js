import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [sec,setSec]=useState(0);
  const [min,setMin]=useState(0);
  const [hr,setHr]=useState(0);

  let time=null;

  useEffect(()=>{
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
    return ()=> clearInterval(time)
  });

const restart=()=>{
  setSec(0);
  setMin(0);
  setHr(0)
};

const start=()=>{
  clearInterval(time)
}

  return (
    <div className='App'>
      <div>
        <h1>Digital Counter</h1>
        <h2>{hr<10?"0"+hr:hr}:{min<10?"0"+min:min}:{sec<10?"0"+sec:sec}</h2>
        <div>
          <button onClick={restart}>Restart</button>
          <button onClick={start}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default App;
