import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer.js";
import addItem from "./actions/addItem.js";
import deleteItem from "./actions/deleteItem.js";
import selectTable from "./actions/selectTable.js";
import activeTable from "./actions/activeTable.js";
import increaseMoney from "./actions/increaseMoney.js";
var store = createStore(reducer);

store.dispatch(activeTable(10));
store.dispatch(addItem(10, "1", 20));
store.dispatch(activeTable(10));
console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
