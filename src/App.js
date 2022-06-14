import Board from "./components/Board";
import React from "react";
import { useState } from "react";

import "./styles/root.scss"
import { CalculateWinner } from "./components/CalculateWinner";

function App() {
  const [history, setHistory] = useState([{board: Array(9).fill(null), isXNext: true}]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  console.log(history);
  const winner = CalculateWinner(current.board);
  const message = winner? `Winner is ${winner}`: `${current.isXNext?"X":"O"}'s turn.`

  const handleSquareClick = (position) => {
      if(current.board[position] || winner){
          return;
      }
      setHistory((prevState)=>{
        const last = prevState[prevState.length-1];
          const newBoard = last.board.map((square, pos)=>{
              if(pos === position){
                  return last.isXNext?'X':'O';
              }
              return square;
          })
          return prevState.concat({ board: newBoard, isXNext: !last.isXNext })
      })
      setCurrentMove(prevState=>prevState+1)
  }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board board={current.board} handleSquareClick={handleSquareClick}/>
      <h5>{message}</h5>
    </div>
  );
}

export default App;
