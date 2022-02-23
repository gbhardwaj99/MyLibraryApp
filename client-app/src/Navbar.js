import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <div align="left" style={{ position: "absolute", left: "5%" }}>
          <h2>MyLibrary</h2>
        </div>
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/CatalogView">View Catalog</Link>
        <Link to="/CartView">View Cart</Link>
      </div>
    );
  }
}
