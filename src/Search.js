import React, { Component } from "react";
import Result from "./Result";
import { Link } from "react-router-dom";
import firebase from "./firebase";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      resultList: [],
      movieFound: null,
      userInfo: null,
    };
  }

  searchMovie() {
    console.log(this.state.searchText);
    const apiKey = "ea9e7b56";
    const { searchText } = this.state;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchText}`;
    fetch(url)
      .then((r) => r.json())
      .then(({ Search, Response }) => {
        if (Response === "True")
          this.setState((preState) => ({
            ...preState,
            resultList: Search,
            movieFound: true,
          }));
        else this.setState((perState) => ({ ...perState, movieFound: false }));
      });
  }

  componentDidMount() {
    this.userInfo();
  }

  userInfo() {
    console.log(firebase.getCurrentUsername());
    this.setState((preState) => {
      return {
        ...preState,
        userInfo: {
          ...preState["userInfo"],
          name: firebase.getCurrentUsername(),
        },
      };
    });
  }

  render() {
    console.log("render function of search");
    console.log(this.state.movieFound);

    return (
      <React.Fragment>
        <div className="search-container">
          {/*<div>
            <pre>{JSON.stringify(this.state.resultList, null, 2)}</pre>
          </div>
           <div>
          <pre>{JSON.stringify(this.state.resultList, null, 2)}</pre>
          </div>
          */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.searchMovie();
            }}
          >
            <div className="form-group search-form">
              <label htmlFor="exampleInputEmail1">Search Your Movie Here</label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                value={this.state.searchText}
                onChange={(e) => this.setState({ searchText: e.target.value })}
                onBlur={(e) => this.setState({ searchText: e.target.value })}
              />
              <button type="submit" className="btn mt-2 btn-primary">
                Submit
              </button>
            </div>
          </form>
          {this.state.movieFound ? (
            <Result
              searchResult={this.state.resultList}
              movieFound={this.state.movieFound}
            />
          ) : this.state.movieFound !== null ? (
            <div className="d-flex mt-4 justify-content-center">
              <h2>No movies found</h2>
            </div>
          ) : (
            <div />
          )}
        </div>
      </React.Fragment>
    );
  }
}
