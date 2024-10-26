import React, { useCallback, useState } from 'react'

const useGameOver = () => {
    const [gameOver, setGameOver] = useState(true)
    const resetGame = useCallback(() => {
        setGameOver(false);
      }, []);
    
    return [gameOver, setGameOver, resetGame];
}

export default useGameOver
