import React from 'react'
import Square from './Square'
import './Tictactoe.css'
function Tictactoe() {
  return (
    <div className='board-container'>
     <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
     </div>
     <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
     </div>
     <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
     </div>
    </div>
  )
}

export default Tictactoe