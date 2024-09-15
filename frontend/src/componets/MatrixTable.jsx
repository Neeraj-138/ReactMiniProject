import React, { useEffect, useState } from 'react'

function MatrixTable() {
    const [col,setCol]=useState(2);
    const [row,setRow]=useState(2);
    console.log(col,row)
    const [matrix, setMatrix] = useState([]);
    useEffect(()=>{
        let generate=generateMatrix(row,col);
        setMatrix(generate);
    },[row,col])
    const generateMatrix=(row,col)=>{
        let matrixtable=Array.from({length:row},()=>Array(col).fill(0))
        console.log("matrix",matrixtable)
        let val=1;
        for(let j=0;j<col;j++){
            if(j%2===0){
                for(let i=0;i<row;i++){
                    matrixtable[i][j]=val++;
                }
            }else{
                
                for(let i=row-1;i>=0;i--){
                    matrixtable[i][j]=val++;
                }

            }
        }

        return matrixtable;
    }
    console.log(matrix)

  return (
    <div>
      <h1>Column Table</h1>
      <input type='range' min={2} max={8} value={col}  name='column' onChange={e=>{setCol(parseInt(e.target.value))}} />
      <input type='range' min={2} max={8} value={row} name='row' onChange={e=>{setRow(parseInt(e.target.value))}}  />
        <div>
            {
             matrix.map((item,indexrow)=>(
                <div key={indexrow} className='Row'>
                {
                    item.map((e,indexcol)=>(
                        <div key={`${indexrow}-${indexcol}`} className='matrixCell'>
                            {e}
                        </div>
                    ))
                }
                </div>
             ))
            }
        </div>
      
    </div>
  )
}

export default MatrixTable
