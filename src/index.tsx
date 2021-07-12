import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./PageRoutes/history";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
