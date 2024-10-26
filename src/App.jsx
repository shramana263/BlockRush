import React from 'react'
import Game from './modules/Game/components/Game'

const App = () => {
  return (
    <>
    <div className='h-[100vh] w-full flex justify-center items-center'>

      <Game rows={20} cols={10}/>
    </div>
    </>
  )
}

export default App
