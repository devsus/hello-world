import React, { Component } from "react";

export class HowerCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h1 onMouseOver={incrementCount}>Hower {count} times </h1>;
  }
}

export default HowerCounterTwo;
