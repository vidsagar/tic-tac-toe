import Board from "./components/Board";
import React from "react";
import { useState } from "react";

import "./styles/root.scss"
import { CalculateWinner } from "./components/CalculateWinner";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = CalculateWinner(board);
  const message = winner? `Winner is ${winner}`: `${isXNext?"X":"O"}'s turn.`

  const handleSquareClick = (position) => {

      if(board[position] || winner){
          return;
      }

      setBoard((prevState)=>{
          return prevState.map((square, pos)=>{
              if(pos === position){
                  return isXNext?'X':'O';
              }
              
              return square;
          })
      })
      setIsXNext((prevState)=>!prevState)
  }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board board={board} handleSquareClick={handleSquareClick}/>
      <h5>{message}</h5>
    </div>
  );
}

export default App;
