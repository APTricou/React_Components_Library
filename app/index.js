import React from "react";
import ReactDOM from "react-dom";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <nav></nav>;
  }
}

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {};
    render;
  }
}

class Content extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
}

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
