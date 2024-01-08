import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Devendra",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Devendra" });
    }, 2000);
  }

  render() {
    console.log(
      "***********************Parent Component render *******************************"
    );
    return (
      <div>
        <div>Parent Component</div>
        <MemoComp name={this.state.name} />
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
