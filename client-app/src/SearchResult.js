import React, { Component } from "react";
import axios from "axios";
import "./SearchView.css";

export default class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:4000/catalog/${this.props.match.params.action}/${this.props.match.params.value}`
      )
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => console.log("Something went wrong!"));
  }
  render() {
    let bookMap = this.state.books.map((a) => {
      return (
        <div
          align="center"
          style={{ fontFamily: "monospace" }}
          className="container"
        >
          <div className="row">
            <div className="col" style={{ margin: "10px" }}>
              <img src={a.thumbnailUrl}></img>
            </div>
            <div className="col" style={{ margin: "20px" }}>
              <br />
              <p>
                <u>Title</u>: {a.title}
              </p>
              <p>
                <u>ISBN</u>: {a.isbn}
              </p>
              <p>
                <u>Category</u>: {a.category}
              </p>
              <p>
                <u>Rating</u>: {a.rating}
              </p>
              <hr />
            </div>
          </div>
        </div>
      );
    });
    return <div className="searchDiv">{bookMap}</div>;
  }
}
