import { Component } from "react";
import OptionBtn from "../../components/OptionBtn/OptionBtn";
import Shadow from "../../components/Shadow/Shadow";
import { GAME_BUTTONS } from "../../Global.js";
import "./YourTurn.css";
const YourTurn = ({ clicked }) => {

  function onClicked(e) {
    if (clicked) clicked(e);
  }
  return (
    <div>
      <div className="app-body">
        <div className="app-options">
          <div className="option-connections">
            <span className="option-connection-1"></span>
            <span className="option-connection-2"></span>
            <span className="option-connection-3"></span>
          </div>
          <div className="option-btn btn-1">
            <div className="body">
    
            <OptionBtn gameBtn={GAME_BUTTONS.PAPER} clicked={onClicked}></OptionBtn>
           
            
            </div>
          </div>
          <div className="option-btn btn-2">
            <div className="body">
              <OptionBtn gameBtn={GAME_BUTTONS.ROCK} clicked={onClicked}></OptionBtn>
            </div>
          </div>

          <div className="option-btn btn-3">
            <div className="body">
              <OptionBtn gameBtn={GAME_BUTTONS.SCISSOR} clicked={onClicked}></OptionBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}


export default YourTurn;