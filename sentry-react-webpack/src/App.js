import React, { Component} from "react";


class App extends Component {
  render() {
    const thisShouldBreak = () => {
      throw new Error("This is a react Error!");
    }
    return (
        <div>
          <h1>Welcome to my App</h1>
          <p>Click the button to create an error</p>
          {<button onClick={thisShouldBreak}>Click Me</button>}
        </div>
    )
  }
}

export default App;