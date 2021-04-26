import React from "react";
import OptionBtn from "./OptionBtn/OptionBtn";
import IconPaper from "./assets/icon-paper.svg";
import IconRock from "./assets/icon-rock.svg";
import IconScissors from "./assets/icon-scissors.svg";
import "./App.css";
function App() {
  return (
    <div className="app-bg">
       <OptionBtn btnIcon={IconPaper} btnType="paper"></OptionBtn>
        <OptionBtn btnIcon={IconRock} btnType="rock"></OptionBtn>
        <OptionBtn btnIcon={IconScissors} btnType="scissors"></OptionBtn>
    </div>
  );
}

export default App;
