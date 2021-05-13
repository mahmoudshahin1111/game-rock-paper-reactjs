import React, { Component, useState } from "react";

import "./App.css";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import YourTurn from "./pages/YourTurn/YourTurn";
import WaitComputer from "./pages/WaitComputer/WaitComputer";
import { GAME_BUTTONS, GAME_STATUS, STEPS } from "./Global";
import Shadow from "./components/Shadow/Shadow";





const App = ({ }) => {
  const [currentStep, setCurrentStep] = useState(STEPS.YOUR_TURN);
  const [gameButtons, setGameButtons] = useState([
    GAME_BUTTONS.ROCK,
    GAME_BUTTONS.SCISSOR,
    GAME_BUTTONS.PAPER,
  ]);
  const [score, setScore] = useState(0);
  const [playerGameBtn, setPlayerGameBtn] = useState({});
  const [computerGameBtn, setComputerGameBtn] = useState({});

  const openRules = () => {
    console.log("open rules");
  };
  const playerChoosesBtn = (gameBtn) => {
    setPlayerGameBtn(gameBtn);
    setCurrentStep(STEPS.COMPUTER_TURN);
  };
  const computerChoosesBtn = (gameBtn) => {
    this.setState({ computerGameBtn: gameBtn });
  };
  const playAgain = (turnStatus) => {
    if (turnStatus === GAME_STATUS.WINNER) {
      setScore(score + 2);
    }else if(turnStatus === GAME_STATUS.LOOSER) {
      setScore(Math.max(0, score - 1));
    }
    setPlayerGameBtn(null);
    setCurrentStep(STEPS.YOUR_TURN);
  };

  return (
    <div className="app">
<ScoreBoard score={score} gameButtons={gameButtons} />
      {currentStep === STEPS.YOUR_TURN ? (
        <YourTurn clicked={playerChoosesBtn} />
      ) : (
        <WaitComputer
          playerGameBtn={playerGameBtn}
          onGamePlayAgain={playAgain}
        />
      )}

      <div className="footer">
        <button className="rules-btn" onClick={openRules}>
          rules
        </button>
      </div>
    </div>
  );
};

export default App;
