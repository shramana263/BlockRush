import React from 'react'
import Menu from './Menu'
import useGameOver from '../hooks/useGameOver'
import Board from './Board'

const Game = ({rows, cols}) => {

    const [gameOver, setGameOver, resetGame]= useGameOver()
    const start=()=>{
        resetGame()
        // console.log(`Start gameOver = ${gameOver}`)
    }

  return (
    <div className='bg-purple-800 h-[100vh] w-full text-white flex flex-col justify-center items-center'>
        {
            gameOver ? (
                <Menu onClick={start}/>

            ) 
            :
            (

                <Board rows={rows} columns={cols} setGameOver={setGameOver}/>
            )
        }
      
    </div>
  )
}

export default Game
