import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App.js";
import Welcome from "./Welcome.js";
import reportWebVitals from "./reportWebVitals";

const welcomer = <Welcome name="3!3!마3!" />;
ReactDOM.render(welcomer, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
