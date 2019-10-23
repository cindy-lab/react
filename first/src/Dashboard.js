import React, { Component } from "react";
import "./Dashboard.scss";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: [],
      num: 0
    };
    this.addPic = this.addPic.bind(this);
  }
  addPic = e => {
    this.setState({ pic: URL.createObjectURL(e.target.files[this.state.num]) });
  };
  render() {
    const { pic } = this.state;
    return (
      <div>
        <h1>Welcome to Stargaze {this.state.username}</h1>
          <div id="profiles">
          <h2>Profile</h2>
          <h2>Timeline</h2>
          <h2>Gallery</h2>
          <h2>Setting</h2>
        </div>
        <div id="starfeed">
          <form action="/action_page.php">
            <input
              type="file"
              accept="file_extension|video/*|image/*"
              onChange={this.addPic}
            ></input>
            <br />
            <img src={pic}></img>
          </form>
        </div>
        <div id="notification">
          <h1>Notification</h1>
        </div>
      </div>
    );
  }
}
export default Dashboard;