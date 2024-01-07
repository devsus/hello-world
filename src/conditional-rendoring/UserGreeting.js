import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Devendra</div>;

    //Another way..............................
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Devendra</div>
    // ) : (
    //   <div>Welcome Guest </div>
    // );
    // Another way................................
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Devendra</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    //Another way of conditioning.........................
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Devendra</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
