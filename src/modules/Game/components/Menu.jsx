import React from 'react'

const Menu = ({onClick}) => {
  return (
    <div>

        <button onClick={onClick}
        className='border-2 rounded p-3 m-3 text-xl'
        >
            Play Tetris
        </button>
      
    </div>
  )
}

export default Menu
