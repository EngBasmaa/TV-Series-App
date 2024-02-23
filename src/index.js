import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

/*
* To create a new react element:
 const greeting = React.createElement("h1", {}, "Hello World");

* or by using 'jsx' syntax:
const greeting = <h1>Hello World</h1>;


* To create a simple function to return the current date:
const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
};

const greeting = <h1>Hello World! the current date is : {getCurrentDate()}</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  greeting,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//....................
class MyClass {
  #privateProperty = 42;

  getPrivateProperty() {
    return this.#privateProperty;
  }
}

const myObject = new MyClass();

console.log(myObject.getPrivateProperty()); // Correctly access the private property

//................



reportWebVitals();
