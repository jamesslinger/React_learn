import React from "react";
import ReactDOM from "react-dom";

const fName = "James";
const lName = "Slinger";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 100)}.</p>
    <p>Copyright {year}.</p>
  </div>,
  document.getElementById("root")
);
