import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

export class ComponentE extends Component {
  //getting context in current component
  //   static contextType = UserContext;
  render() {
    return (
      <div>
        ComponentE context {this.context}
        <ComponentF />
      </div>
    );
  }
}
//getting context in current component another way
ComponentE.contextType = UserContext;
export default ComponentE;
