import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import GameBoard from './modules/Game/GameBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameBoard />
  </StrictMode>,
)
