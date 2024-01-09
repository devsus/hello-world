import React, { Component } from "react";
import WithCounter from "./WithCounter";
class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hoverd {count} times</h2>
      </div>
    );
  }
}

//calling UpdatedComponent here
export default WithCounter(HoverCounter, 10);
