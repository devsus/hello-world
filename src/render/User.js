import React, { Component } from "react";

//The term render prop refer to a technique for sharing code between react component using  a prop whose values is function
class User extends Component {
  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default User;
