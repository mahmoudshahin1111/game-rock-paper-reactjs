
import "./ScoreBoard.scss";
const ScoreBoard = ({ score, gameButtons }) => {

  return (
    <div className="app-scoreBoard">
      <div className="scoreBoard-content">
      {gameButtons ? (
        <ul className="list">
          {gameButtons.map((btn, i) => {
            console.log(btn);
            return (
              <li className="list-item" key={i}>
                <span>{btn.name}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}

      <div className="score-content">
        <span className="title">Score</span>
        <span className="value">{score}</span>
      </div>
      </div>
    </div>
  );

}


export default ScoreBoard;