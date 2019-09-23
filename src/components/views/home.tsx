import * as React from "react";
import { browserHistory } from "react-router";

class Home extends React.Component {
  componentDidMount() {
    browserHistory.push("/");
  }
  render() {
    return (
      <div className="Home">
        <h1>CodeSandbox Home</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default Home;
