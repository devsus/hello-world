import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {/* here we are consuming context value */}
          {(username) => {
            return <div>Hello {username}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentF;
