import React, { Component, Fragment } from "react";

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0, fiftyfifty: 0, dam: 0 };

  handleClick(name) {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  }

  render() {
    console.log("this.state :>> ", this.state.dam);
    return (
      <Fragment>
        <h3>FEEDBACK</h3>
        <div>
          {Object.keys(this.state).map((el, i) => (
            <button
              key={i}
              style={{ padding: "10px", fontSize: "30px" }}
              onClick={() => this.handleClick(el)}
            >
              {el}
            </button>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Feedback;
