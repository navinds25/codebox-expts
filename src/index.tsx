import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, browserHistory } from "react-router-dom";
import routes from "./routes";

import "./styles.css";

ReactDOM.render(
  <BrowserRouter history={browserHistory} routes={routes} />,
  document.getElementById("app")
);
