import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function AddDiv() {
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(""));

  const victory = (turn, newBoard) => {
    let victory = false;
    let result = "";
    if (newBoard[0] == turn && newBoard[1] == turn && newBoard[2] == turn)
      victory = true;
    if (newBoard[3] == turn && newBoard[4] == turn && newBoard[5] == turn)
      victory = true;
    if (newBoard[6] == turn && newBoard[7] == turn && newBoard[8] == turn)
      victory = true;
    if (newBoard[0] == turn && newBoard[3] == turn && newBoard[6] == turn)
      victory = true;
    if (newBoard[1] == turn && newBoard[4] == turn && newBoard[7] == turn)
      victory = true;
    if (newBoard[2] == turn && newBoard[5] == turn && newBoard[8] == turn)
      victory = true;
    if (newBoard[0] == turn && newBoard[4] == turn && newBoard[8] == turn)
      victory = true;
    if (newBoard[2] == turn && newBoard[4] == turn && newBoard[6] == turn)
      victory = true;

    if (victory) {
      result = turn + " is victorious!";
    }
    return result;
  };

  const handleClick = (event) => {
    if (document.getElementById("result").innerHTML == "") {
      let result = "";
      document.getElementById(event.target.id).innerHTML = turn;
      turn == "X" ? setTurn("Y") : setTurn("X");
      let newBoard = board.slice();
      newBoard[event.target.id] = turn;
      setBoard(newBoard);

      document.getElementById("result").innerHTML = victory(turn, newBoard);
    }
  };

  const creatDivs = () => {
    let contents = [];
    for (let i = 0; i < 9; i++) {
      contents.push(
        <div className="grid" id={i} key={i} onClick={handleClick}>
          &nbsp;
        </div>
      );
    }
    return (
      <>
        <div className="wrapper">{contents}</div>
      </>
    );
  };
  return (
    <>
      {creatDivs()}
      <div id="result" key="result" className="result"></div>
    </>
  );
}

function App() {
  return <AddDiv />;
}

export default App;
