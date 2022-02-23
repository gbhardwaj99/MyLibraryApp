import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CatalogView.css";

export default class CatalogView extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <button className="myBtn btn btn-warning">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/CatalogView/GetAllBookResult`}
          >
            Get All Books
          </Link>
        </button>
        <br />
        <br />
        <button className="myBtn btn btn-warning">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/CatalogView/SearchView/${"title"}`}
          >
            Search By Title
          </Link>
        </button>
        <br />
        <br />
        <button className="myBtn btn btn-warning">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/CatalogView/SearchView/${"category"}`}
          >
            Search By Category
          </Link>
        </button>
        <br />
        <br />
        <button className="myBtn btn btn-warning">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/CatalogView/SearchView/${"author"}`}
          >
            Search By Author
          </Link>
        </button>
        <br />
        <br />
        <button className="myBtn btn btn-warning">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/CatalogView/SearchView/${"rating"}`}
          >
            Search By Rating
          </Link>
        </button>
        <br />
        <br />
      </div>
    );
  }
}
