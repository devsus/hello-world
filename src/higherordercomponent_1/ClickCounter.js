import React, { Component } from "react";
import WithCounter from "./WithCounter";
//Using Higher order component we can use common functionality for all component
// To share common functionality between component
export class ClickCounter extends Component {
  render() {
    //const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}
//calling UpdatedComponent here
export default WithCounter(ClickCounter);
