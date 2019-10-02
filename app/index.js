import React from "react";
import ReactDOM from "react-dom";
import {
  Image,
  Description,
  SimpleCard,
  SideBar,
  NavBar,
  Title,
  Content
} from "./Library";

class Application extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="mainApp" id="container">
        <NavBar />
        <div className="flex-container">
          <SideBar />
          <Content />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById("ReactDiv"));
