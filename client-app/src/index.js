import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CatalogView from "./CatalogView";
import SearchView from "./SearchView";
import SearchResult from "./SearchResult";
import GetAllBookResult from "./GetAllBookResult";
import CartView from "./CartView";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App}></Route>
      <Route path="/CatalogView" component={CatalogView}></Route>
      <Route path="/CartView" component={CartView}></Route>
      <Route
        path="/CatalogView/SearchView/:action"
        component={SearchView}
      ></Route>
      <Route
        path="/CatalogView/SearchResult/:action/:value"
        component={SearchResult}
      ></Route>
      <Route
        path="/CatalogView/GetAllBookResult"
        component={GetAllBookResult}
      ></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
