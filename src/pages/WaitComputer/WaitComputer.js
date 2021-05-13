
import { useState } from "react";
import OptionBtn from "../../components/OptionBtn/OptionBtn";
import Shadow from "../../components/Shadow/Shadow";
import { GAME_BUTTONS, GAME_STATUS } from "../../Global";

import "./WaitComputer.css";



const WinComponent = ({ playAgainClicked }) => {
  return (
    <div>
      <p className="title">you win</p>
      <button className="play-again-btn" onClick={(e) => playAgainClicked(e)}>play again</button>
    </div>
  );
};

const LooseComponent = ({ playAgainClicked }) => {
  return (
    <div>
      <p className="title">you Loose</p>
      <button className="play-again-btn" onClick={(e) => playAgainClicked(e)}>play again</button>
    </div>
  );
};

const EqualComponent = ({ playAgainClicked }) => {
  return (
    <div>
      <p className="title">No Winners</p>
      <button className="play-again-btn" onClick={(e) => playAgainClicked(e)}>play again</button>
    </div>
  );
};

const WaitComputer = ({ playerGameBtn, onGamePlayAgain }) => {
  const [computerBtn, setComputerBtn] = useState();
  const [gameStatus, setSetGameStatus] = useState();


  function CanBeat(currentBtn, otherBtn) {
    for (const key of currentBtn.beats) {
      if (key === otherBtn.key) {
        return true;
      }
    }
    return false;
  }


  function computerTurn() {
    const timeOut = setTimeout(() => {
      const computerBtn = GAME_BUTTONS.ROCK;
      setComputerBtn(computerBtn);
      if (playerGameBtn === computerBtn) {
        setSetGameStatus(GAME_STATUS.EQUALS);
      } else if (CanBeat(playerGameBtn, computerBtn) === true) {
        setSetGameStatus(GAME_STATUS.WINNER);
      } else {
        setSetGameStatus(GAME_STATUS.LOOSER);
      }
      clearTimeout(timeOut);
    }, 1500);
  }
  computerTurn();
  return (
    <div>
      <div className="vs-board">
        <div className="body">
          <div className="player">
          
            <div className="options-btn">
              {playerGameBtn ? (
                <div className="btn-content">
                {
                  gameStatus === GAME_STATUS.WINNER?<Shadow> </Shadow>:''
                }
                
                  <OptionBtn gameBtn={playerGameBtn} clickable={false} />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="name">You picked</div>
          </div>
        
          <div className="computer">
        
            <div className="options-btn">
              {computerBtn ? (
                <div className="btn-content">
                {
                  gameStatus === GAME_STATUS.LOOSER?<Shadow> </Shadow>:''
                }
                  <OptionBtn gameBtn={computerBtn} clickable={false} />
                </div>
              ) : (
                <div className="empty-btn"></div>
              )}
            </div>
       
               <div className="name">{  computerBtn?'The House Picked':'Waiting'}</div>
         
         
          </div>
        </div>
        <div className="result-body">
            {(gameStatus === GAME_STATUS.WINNER) ? (<WinComponent playAgainClicked={() => onGamePlayAgain(gameStatus)} />) : ''}
            {(gameStatus === GAME_STATUS.LOOSER) ? (<LooseComponent playAgainClicked={() => onGamePlayAgain(gameStatus)} />) : ''}
            {(gameStatus === GAME_STATUS.EQUALS) ? (<EqualComponent playAgainClicked={() => onGamePlayAgain(gameStatus)} />) : ''}
          </div>
      </div>
    </div>
  );
};


export default WaitComputer;