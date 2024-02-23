import React from "react";

const Intro = (props) => {
  //   return <p className="App-intro">Our First Functional Component</p>;//   return <p className="App-intro">Our First Functional Component</p>;
  return <p className="App-intro">{props.message}</p>;
};

export default Intro;
