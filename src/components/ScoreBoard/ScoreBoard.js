import { Component } from "react";
import "./ScoreBoard.css";
export default class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      btnOptions: ["rock", "paper", "scissors"],
    };
  }

  render() {
    return (
      <div className="app-scoreBoard">
       
        <ul className='list'>
          {this.state.btnOptions.map((option, i) => {
            console.log(option);
            return <li className="list-item" key={i}>
                <span>{option}</span>
            </li>;
          })}
        </ul>
        <div className='score-content'>
            <span className='title'>Score</span>
            <span className='value'>12</span>
        </div>
      </div>
    );
  }
}
