import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      //The term render prop refer to a technique for sharing code between react component using  a prop whose values is function
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default Counter;
