import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface UserData {
  firstValue: number;
  secondValue: number;
  thirdValue: number;
  result: number
}

const App = () => {
  const [firstValue, setFirstValue] = useState("")
  const [secondValue, setSecondValue] = useState("")
  const [thirdValue, setThirdValue] = useState("")
  const [result, setResult] = useState(0)
  const [firstCondition, setFirstCondition] = useState(false)
  const [secondCondition, setSecondCondition] = useState(false)
  const [thirdCondition, setThirdCondition] = useState(false)


  const getResult = () => { 
    if((firstCondition === false && secondCondition === false && thirdCondition === false) || (firstCondition === true && secondCondition === false && thirdCondition === false) 
        || (firstCondition === false && secondCondition === true && thirdCondition === false) || (firstCondition === false && secondCondition === false && thirdCondition === true)) {
      alert('harap di isi value lainnya')

    } else {
      setResult(Number(firstValue) + Number(secondValue) + Number(thirdValue) )
    }
   
  }

  const getResultMinus = () => { 
    if((firstCondition === false && secondCondition === false && thirdCondition === false) || (firstCondition === true && secondCondition === false && thirdCondition === false) 
    || (firstCondition === false && secondCondition === true && thirdCondition === false) || (firstCondition === false && secondCondition === false && thirdCondition === true)) {
      alert('harap di isi value lainnya')

    } else {
        setResult(Number(firstValue) - Number(secondValue) - Number(thirdValue) )
    }
  }

  const getResultMultiply = () => { 
    if((firstCondition === false && secondCondition === false && thirdCondition === false) || (firstCondition === true && secondCondition === false && thirdCondition === false) 
    || (firstCondition === false && secondCondition === true && thirdCondition === false) || (firstCondition === false && secondCondition === false && thirdCondition === true)) {
      alert('harap di isi value lainnya')
    } else {
    setResult(Number(firstValue !== "" ? firstValue : "1") * Number(secondValue !== "" ? secondValue : "1") * Number(thirdValue !== "" ? thirdValue : "1"))
    }
  }

  const getResultDivide = () => { 
    if((firstCondition === false && secondCondition === false && thirdCondition === false) || (firstCondition === true && secondCondition === false && thirdCondition === false) 
    || (firstCondition === false && secondCondition === true && thirdCondition === false) || (firstCondition === false && secondCondition === false && thirdCondition === true)) {
      alert('harap di isi value lainnya')
    } else {
      setResult(Number(firstValue !== "" ? firstValue : "1") / Number(secondValue !== "" ? secondValue : "1") / Number(thirdValue !== "" ? thirdValue : "1"))
    }
  }
 
  return (
    <div className="App">
     <h1>Calculator App</h1>
     <div style={{ marginTop: 12 }}>
       <input value={firstValue} onChange={(e) => {
         setFirstValue(e.target.value)
         setFirstCondition(e.target.value !== "" ? true : false)
        }
         
         } type="number" />
       <input 
       disabled
       type="checkbox" 
       checked={firstCondition} 
       />
     </div>
     <div style={{ marginTop: 12 }}>
       <input 
       value={secondValue} 
       onChange={(e) => {
         setSecondValue(e.target.value)
         setSecondCondition(e.target.value !== "" ? true : false)
       }} 
       type="number" />
       <input 
       disabled
       type="checkbox" 
       checked={secondCondition} 
       />
     </div>
     <div style={{ marginTop: 12 }}>
       <input 
       value={thirdValue} 
       onChange={(e) => {
         setThirdValue(e.target.value)
         setThirdCondition(e.target.value !== "" ? true : false)
       }} type="number" />
       <input 
       disabled
       type="checkbox" 
       checked={thirdCondition} 
      />
     </div>
     <div style={{marginTop: 10}}>
       <button onClick={getResult}>
         +
       </button>
       <button onClick={getResultMinus}>
         -
       </button>
       <button onClick={getResultMultiply}>
         *
       </button>
       <button onClick={getResultDivide}>
         /
       </button>
     </div>
     <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
       <h2>Hasil : </h2>
       <h2>   {result}</h2>
       
     </div>
     
    </div>
  );
}

export default App;
