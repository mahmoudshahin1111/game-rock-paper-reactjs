import React, { Component, useState } from "react";

import "./App.scss";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import YourTurn from "./pages/YourTurn/YourTurn";
import WaitComputer from "./pages/WaitComputer/WaitComputer";
import RulesPreview from "./components/RulesPreview/RulesPreview";
import { GAME_BUTTONS, GAME_STATUS, STEPS } from "./Global";
import { RulesBtn } from "./components/Rules/RulesBtn";







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
  const [rulesPreviewOpened,setRulesPreviewOpened] = useState(false);
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
    } else if (turnStatus === GAME_STATUS.LOOSER) {
      setScore(Math.max(0, score - 1));
    }
    setPlayerGameBtn(null);
    setCurrentStep(STEPS.YOUR_TURN);
  };
  return (
    <div className="app">
      {
        (rulesPreviewOpened)?(<RulesPreview closeClicked={()=>setRulesPreviewOpened(false)}/>):''
      }
    
      <ScoreBoard score={score} gameButtons={gameButtons} />
      {currentStep === STEPS.YOUR_TURN ? (
        <YourTurn clicked={playerChoosesBtn} />
      ) : (
        <WaitComputer
          playerGameBtn={playerGameBtn}
          onGamePlayAgain={playAgain}
        />
      )}

      <div className="roles-content">
        <RulesBtn clicked={()=>setRulesPreviewOpened(!rulesPreviewOpened)} />
      </div>
    </div>
  );
};

export default App;
