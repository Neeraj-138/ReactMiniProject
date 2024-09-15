
import { useState } from 'react';
import './App.css';
import ColorBox from './componets/ColorBox';
import Counter from './componets/Counter';
import MatrixTable from './componets/MatrixTable';


function App() {
    const[counter,setCounter]=useState(false)
    const[table,setTable]=useState(false)
    const[color,setColor]=useState(false)
    const handleShow=(para)=>{
        if(para==='counter'){
            setCounter((prev)=>!prev)
            setColor(false);
            setTable(false)
        }else if(para==='color'){
            setCounter(false)
            setColor((prev)=>!prev);
            setTable(false)
        }else{
            setCounter(false)
            setColor(false);
            setTable((prev)=>!prev)
        }
        
    }
  return (
    <div className="App">   
        <h4>Please click on the button to see the behaviour</h4>
        <button onClick={()=>handleShow('counter')}> See Counter</button>
        <button onClick={()=>handleShow('table')}>See Matric Table</button>
        <button onClick={()=>handleShow('color')}>See ColorBox</button>
        {counter&&<Counter/>}
        {table&&<MatrixTable/>}
        {color&&<ColorBox/>}
        
   </div>
  );
}

export default App;
