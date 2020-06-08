import React, { Component } from "react";
import SearchContainer from "./containers/SearchContainer";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">Flight Search App</div>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
