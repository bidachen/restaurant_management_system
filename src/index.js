import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer.js";
var store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
