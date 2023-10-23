import React from "react";
import "./styles.css";

function AgeCalci() {
  function calc() {
    let val = new Date(document.getElementById("date").value);
    console.log(val);
    let age = new Date(new Date() - val).getFullYear() - 1970;
    document.getElementById("age").innerHTML = "You are " + age + " years old";
  }
  return (
    <div id="task">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input type="date" id="date" />
      <br />
      <button onClick={calc}>Calculate Age</button>
      <br />
      <br />
      <label id="age"></label>
    </div>
  );
}

export default AgeCalci;
