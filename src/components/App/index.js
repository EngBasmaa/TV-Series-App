import "./App.css";
import React, { Component } from "react";
import Main from "../Main";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

/*
* To create our first functional component:
* Note: 'jsx' just use lowercase letters in its names in building components.
* Note: capitalized names refers to your 'custom components'.
* you can put that in the its component separately.

const Intro = (props) => {     // props: is for 'properties'
  return <p className="App-intro">Our First Functional Component</p>;
};
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Main />
      </div>
    );
  }
}
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
export default App;
