import { Component } from "react";
import OptionBtn from "../../components/OptionBtn/OptionBtn"
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import IconPaper from "../../assets/icon-paper.svg";
import IconRock from "../../assets/icon-rock.svg";
import IconScissors from "../../assets/icon-scissors.svg";
import "./ChooseBtnPage.css";
export default class ChooseBtnPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <ScoreBoard></ScoreBoard>
        </div>
        <div className="app-body">
          <div className="app-options">
            <div className="option-connections">
              <span className="option-connection-1"></span>
              <span className="option-connection-2"></span>
              <span className="option-connection-3"></span>
            </div>
            <div className="option-btn btn-1">
              <div className="body">
                <OptionBtn btnIcon={IconPaper} btnType="paper"></OptionBtn>
              </div>
            </div>
            <div className="option-btn btn-2">
              <div className="body">
                <OptionBtn btnIcon={IconRock} btnType="rock"></OptionBtn>
              </div>
            </div>

            <div className="option-btn btn-3">
              <div className="body">
                <OptionBtn
                  btnIcon={IconScissors}
                  btnType="scissors"
                ></OptionBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
