import React, { useEffect, useMemo, useState } from 'react'

function ColorBox() {
    const[matrix,setMatrix]=useState([]);
    let rows=5;
    let colm=5;
  
    console.log(matrix)
    const newMatrix=(rows,co)=>{
      
        let createdmatrix=[];
        for(let i=0;i<rows;i++){
            let row=[];
            for(let j=0;j<colm;j++){
                row.push({color:'white'});
            }
            createdmatrix.push(row);
        }
        return createdmatrix;
    }
    useMemo(()=>{
        let generate=newMatrix(rows,colm);
        setMatrix(generate);
    },[rows,colm])
    // const [select,setSelect]=useState();
    var arr=[];
    const [sequence,setSequence]=useState([]);
    const handleClick=(i,j)=>{
        console.log(i,j)
        const updatedMatrix=[...matrix];
        updatedMatrix[i][j].color='green';
        setMatrix(updatedMatrix)
        setSequence((prevSequence)=>[...prevSequence,{'row':i,'col':j}])
        
    }

    useEffect(()=>{
        if(sequence.length>0){
         let timer=setTimeout(()=>{
            const[currentclick,...remaining]=sequence;

            const updatedMatrix=[...matrix];
            updatedMatrix[currentclick.row][currentclick.col].color='white';
            setMatrix(updatedMatrix)
            
            setSequence(remaining)
            console.log("sequnce",sequence)
         },1000)   
         return ()=>{
            clearTimeout(timer)
        }
        }
       

    },[matrix,sequence])

  return (
    <div>
        <h1>ColorBox on click</h1>
        {
            matrix.map((ele,ind)=>(
                <div key={ind} className='rows'>
                {
                    ele.map((e,i)=>(
                        <div key={i} className='col' style={{backgroundColor:e.color}} onClick={()=>{handleClick(ind ,i)}} >{} {ind}{i} </div>
                    ))
                }                 
                </div>
            ))
        }
      
    </div>
  )
}

export default ColorBox
