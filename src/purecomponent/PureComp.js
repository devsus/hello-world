import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    //here pure component will never re render
    console.log("PureComp Component render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
