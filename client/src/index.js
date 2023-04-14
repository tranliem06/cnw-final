import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <StateProvider initialState={initialState} reducer={reducer}> */}
      <App />
      {/* </StateProvider> */}
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
