import { Component } from "react";
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";

import "./WaitComputerPage.css";
export default class ChooseBtnPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="score-board">
          <ScoreBoard></ScoreBoard>
        </div>
        <div className="vs-board">
          <div className="body">
            <div className="player">
                <div className="name"></div>
                <div className="options-btn">
             
                </div>
            </div>
            <div className="computer">
                <div className="name"></div>
                <div className="options-btn">
                    <span className="empty-btn"></span>
                </div>
            </div>
          </div>
        </div>
        <div className="footer">
            <button className="rules-btn">rules</button>
        </div>
      </div>
    );
  }
}
