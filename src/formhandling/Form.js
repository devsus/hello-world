import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      //just we can type only and setting value on text box
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username},${this.state.comments},${this.state.topic}`);
    event.preventDefault(); // this will prevent from page refersh
  };

  render() {
    // const { username, comments, topic } = this.state;
    //using above line we can remove this.state from all <intput value>
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username : </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <br></br>
        <div>
          <label>Comments : </label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <br></br>
        <div>
          <label>Topic : </label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React </option>
            <option value="angular">Angular </option>
            <option value="value">Value </option>
          </select>
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
