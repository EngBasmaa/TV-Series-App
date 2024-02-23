import "./App.css";
import React, { Component } from "react";
import Intro from "../Intro";
import "whatwg-fetch";
import Series from "./../../containers/series/index";

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
        <Intro message="Here, you can find all most loved series" />
        <Series />
      </div>
    );
  }
}
export default App;
