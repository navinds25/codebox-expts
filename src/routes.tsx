import * as React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import Home from "./components/views/home";
import Login from "./components/views/login";

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="*" component={Home} />
  </Route>
);
