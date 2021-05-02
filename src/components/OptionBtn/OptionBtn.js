import React, { Component } from "react";

import "./OptionBtn.css";
export default class OptionBtn extends Component {
  
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }
  render() {
    return (
      <div
        className={this.state.isClicked ? "btn clicked" : "btn"}
        onMouseDown={() => {
          this.setState({ isClicked: true });
        }}
        onMouseUp={() => {
          this.setState({ isClicked: false });
        }}
      >
        <button className={'box-1 ' + this.props.btnType}>
          <span className="box-2">
            <span className="box-3">
              <span className="box-4">
                <span className="box-5">
                  <img src={this.props.btnIcon} alt="paper" />
                </span>
              </span>
            </span>
          </span>
        </button>
      </div>
    );
  }
}
