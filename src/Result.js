import React, { Component } from "react";
import MovieCard from "./MovieCard";

export default class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchResult } = this.props;

    return (
      <div className="d-flex flex-wrap justify-content-between result-container">
        {searchResult.map(({ Title, Poster, Year, imdbID }) => {
          return (
            <MovieCard
              Title={Title}
              Poster={Poster}
              Year={Year}
              imdbID={imdbID}
            />
          );
        })}
      </div>
    );
  }
}
