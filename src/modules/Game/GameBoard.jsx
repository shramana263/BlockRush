import React, { useState } from 'react'
const block=[
  {
    i:0,
    j:2
  },
  {
    i:0,
    j:3
  },
  {
    i:1,
    j:3
  },
  {
    i:2,
    j:3
  },
  
]

const GameBoard = () => {

  
  const MrVisible = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 1, 0],
      [1, 1, 0, 0, 0, 0, 1, 0],
  ]
  const MrX= [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
  ]

    // const MrX = Array.from({ length: 8 }, () => Array(8).fill({number: 0, color:"bg-green-300"}));
    const [array, setArray]= useState(MrVisible)
    const [blockArray, setBlockArray]= useState(MrX)
    const [testBlock, setTestBlock]= useState([])

    const handleClick=(e)=>{
      e.preventDefault()
      let count =0;
      
      block.forEach((item, index)=>{
        blockArray[item.i][item.j]=1
      })
      setBlockArray([...blockArray])

      setTimeout(() => {
       blockArray.forEach((row, i)=>{
          row.forEach((item, j)=>{
            if(blockArray[blockArray.length-i][row.length-j-1]==1 && i+1<blockArray.length-i){
              console.log(blockArray[blockArray.length-i][row.length-j-1])
              // console.log(i,j)
              // console.log(blockArray[i][j]) 
              blockArray[i+1][j]=1
              blockArray[i][j]=0
              setBlockArray([...blockArray])
            }
          })
       })
      }, 3000);
 
    }

  return (
    <>
    <div className='fixed top-3 right-3 bg-purple-700 text-white font-bold p-2 rounded hover:cursor-pointer'
    
    onClick={handleClick}
    >
      Start
    </div>
      <div className='h-[100vh] w-full p-3 flex flex-col justify-end items-center gap-3'>
       <div>
        {
            blockArray && blockArray.map((row, i)=>(
                <div key={i} 
                className='flex justify-center items-center '>
                    {
                      row && row.map((value, j)=>(
                        <div key={j} className={`h-12 w-12 flex flex-col justify-center items-center border-2 border-black p-3 ${value === 1 ? 'bg-red-600' : ''} ${value.color}`}
                        
                        >
                          {value.number}
                          <div className='text-xs'>
                            {i},{j}
                          </div>
                        </div>
                      ))
                    }
                </div>
            ))
        }

       </div>
       
        <div>

        {
            array && array.map((row, index)=>(
                <div key={index} 
                className='flex justify-center items-center '>
                    {
                      row && row .map((value, index)=>(
                        <div key={index} className={`h-12 w-12 flex justify-center items-center border-2 border-black p-3 ${value === 1 ? 'bg-red-600' : ''}`}>
                          {value}
                        </div>
                      ))
                    }
                </div>
            ))
        }
        </div>
        
      </div>
    </>
  )
}

export default GameBoard
