import React, { Component } from "react";

class Form extends Component {
  state = {
    flag: false,
    FirstName: "",
    LastName: "",
    chooseCity: "",
    city: [],
  };
  componentDidMount() {
    this.setState({
      city: [
        { id: 1, value: "Kyiv" },
        { id: 2, value: "Lviv" },
        { id: 3, value: "Poltava" },
      ],
    });
  }

  handleInput = (e) => {
    console.log("e.target.value :>> ", e.target);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  choosingCity = (e) => {
    //     console.log("e.target.value :>> ", e.target.textContent);
    this.setState({ chooseCity: e.target.textContent });
  };

  resetInput = (e) => {
    const { name } = e.target;
    this.setState({ [name]: "" });
  };

  render() {
    console.log("this.props :>> ", this.props);
    const { props } = this.props;
    const { flag, city, FirstName, LastName } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          FirstName
          <input
            name="FirstName"
            value={FirstName}
            onChange={this.handleInput}
            onFocus={this.resetInput}
          />
        </label>

        <label>
          LastName
          <input
            name="LastName"
            value={LastName}
            onChange={this.handleInput}
            onFocus={this.resetInput}
          />
        </label>

        <input value={this.state.chooseCity || "First choose your city"} />
        {flag ? (
          city.map((el) => (
            <p key={el.id} onClick={this.choosingCity}>
              {el.value}
            </p>
          ))
        ) : (
          <p onClick={() => this.setState({ flag: !flag })}>
            Click for choose your city
          </p>
        )}
        <button onClick={() => props(this.state)}>Submit</button>
      </div>
    );
  }
}

export default Form;
