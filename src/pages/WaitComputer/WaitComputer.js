
import { Component, useState } from "react";
import OptionBtn from "../../components/OptionBtn/OptionBtn";
import { GAME_BUTTONS, GAME_STATUS } from "../../Global";

import "./WaitComputer.scss";



const WinComponent = ({ playAgainClicked }) => {
  return (
    <div className="status-component">
      <p className="title">you win</p>
      <button className="play-again-btn" onClick={(e) => playAgainClicked(e)}>play again</button>
    </div>
  );
};

const LooseComponent = ({ playAgainClicked }) => {
  return (
    <div className="status-component">
      <p className="title">you Loose</p>
      <button className="play-again-btn" onClick={(e) => playAgainClicked(e)}>play again</button>
    </div>
  );
};

const EqualComponent = ({ playAgainClicked }) => {
  return (
    <div className="status-component">
      <p className="title">No Winners</p>
      <button className="play-again-btn" onClick={(e) => playAgainClicked(e)}>play again</button>
    </div>
  );
};

class WaitComputer extends Component{
  computerTurnSettimeoutId = null;
  constructor(props){
    super(props);
    this.state = {
      computerBtn:null,
      gameStatus:null,
    }
  }

  componentDidMount(){
    this.computerTurn();
  }

   canBeat(currentBtn, otherBtn) {
    for (const key of currentBtn.beats) {
      if (key === otherBtn.key) {
        return true;
      }
    }
    return false;
  }


   computerTurn() {
    if(this.computerTurnSettimeoutId){
      clearTimeout(this.computerTurnSettimeoutId);
    }
    this.computerTurnSettimeoutId = setTimeout(() => {
      const gameButtonsKeys = Object.keys(GAME_BUTTONS);
      const computerBtn = GAME_BUTTONS[gameButtonsKeys[Math.floor((Math.random()*(gameButtonsKeys.length-1)+1))]];
      this.state.computerBtn = computerBtn;
      if (this.props.playerGameBtn === computerBtn) {
        this.setState({
          gameStatus : GAME_STATUS.EQUALS
        })  
      } else if (this.canBeat(this.props.playerGameBtn, computerBtn) === true) {
        this.setState({
          gameStatus : GAME_STATUS.WINNER
        })  
      } else {
        this.setState({
          gameStatus : GAME_STATUS.LOOSER
        })  
      }
      clearTimeout(this.computerTurnSettimeoutId);
    }, 1500);
  }

  render(){
    return (
      <div>
        <div className="vs-board">
          <div className="body">
            <div className="player">
  
              <div className="options-btn">
                <OptionBtn gameBtn={this.props.playerGameBtn} clickable={false} />
              </div>
              <div className="name">You picked</div>
            </div>
  
            <div className="computer">
  
              <div className="options-btn">
                {
                  (this.state.computerBtn !== null && this.state.computerBtn !== undefined) ?
                    (<OptionBtn gameBtn={this.state.computerBtn} clickable={false} />) :
                    (<span className="empty-btn"></span>)
                }
              </div>
              <div className="name">The House Picked</div>
            </div>
          </div>
          <div className="result-body">
              {(this.state.gameStatus === GAME_STATUS.WINNER) ? (<WinComponent playAgainClicked={() => this.props.onGamePlayAgain(this.state.gameStatus)} />) : ''}
              {(this.state.gameStatus === GAME_STATUS.LOOSER) ? (<LooseComponent playAgainClicked={() => this.props.onGamePlayAgain(this.state.gameStatus)} />) : ''}
              {(this.state.gameStatus === GAME_STATUS.EQUALS) ? (<EqualComponent playAgainClicked={() => this.props.onGamePlayAgain(this.state.gameStatus)} />) : ''}
            </div>
        
        </div>
  
      </div>
    );
  }
};


export default WaitComputer;