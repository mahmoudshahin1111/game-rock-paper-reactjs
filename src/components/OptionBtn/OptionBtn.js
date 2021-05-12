import React, { Component, useState } from "react";

import { GAME_BUTTONS } from "../../Global";
import "./OptionBtn.css";

const OptionBtn = ({ clickable,gameBtn, clicked }) => {
  const [isClicked, setIsClicked] = useState(false);
  if(clickable === undefined){
    clickable = true;
  }
  function btnMouseDown() {
    setIsClicked(true);
    clicked(gameBtn);
  }
  function btnMouseUp() {
    setIsClicked(false)

  }

  return gameBtn ? (
    <div
      className={isClicked && clickable ? "btn clicked" : "btn"}
      onMouseDown={() => clickable?btnMouseDown():null}
      onMouseUp={() => clickable?btnMouseUp():null}
    >
      <button className={"box-1 " + gameBtn.key.toLowerCase()}>
        <span className="box-2">
          <span className="box-3">
            <span className="box-4">
              <span className="box-5">
                <img
                  src={gameBtn.icon}
                  alt={gameBtn.name}
                />
              </span>
            </span>
          </span>
        </span>
      </button>
    </div>
  ) : (
    ""
  );

}

export default OptionBtn;