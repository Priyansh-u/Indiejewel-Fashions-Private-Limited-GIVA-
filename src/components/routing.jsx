import React from "react";

import App from "./register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Name from "./login";
import Next from "./next";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Name />} />
        <Route path="/next" element={<Next />} />
      </Switch>
    </Router>
  );
}
export default Routing;
