import React from "react";
import Feedback from "./components/Feedback/Feedback";
import Form from "./components/Form/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?key=15313425-bc0f61e46a051ea2578b0fd6a&q=yellow+flowers&image_type=photo"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(`err`, err));
  }

  onSubmit(res) {
    console.log(`res`, res);
  }

  render() {
    return (
      <>
        <h1>HELLO WORLD</h1>
        <Form props={this.onSubmit} />
        <Feedback />
      </>
    );
  }
}

export default App;
