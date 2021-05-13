import OptionBtn from "../../components/OptionBtn/OptionBtn";
import { GAME_BUTTONS } from "../../Global.js";
import "./YourTurn.scss";
const YourTurn = ({ clicked }) => {

  function onClicked(e) {
    if (clicked) clicked(e);
  }
  return (
    <div className="app-body">

        <div className="app-options">
          <div className="option-connections">
            <span className="option-connection-1"></span>
            <span className="option-connection-2"></span>
            <span className="option-connection-3"></span>
          </div>
          <span className="option-btn btn-1">
          <OptionBtn gameBtn={GAME_BUTTONS.PAPER} clicked={onClicked}></OptionBtn>
          </span>
          <span className="option-btn btn-2">
          <OptionBtn gameBtn={GAME_BUTTONS.ROCK} clicked={onClicked}></OptionBtn>
          </span>

          <span className="option-btn btn-3">
          <OptionBtn gameBtn={GAME_BUTTONS.SCISSOR} clicked={onClicked}></OptionBtn>
          </span>
        </div>

    </div>
  );

}


export default YourTurn;