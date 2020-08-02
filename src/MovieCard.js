import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function MovieCard({ Title, Poster, Year, imdbID }) {
  const navStyle = {
    color: "black",
  };
  // const favorites1 = [];
  const [{ favorites }, dispatch] = useStateValue();

  console.log("favorites", favorites);

  const addToFavorite = (fav) => {
    console.log("id", fav);
    favorites.findIndex((res) => res.imdbID === fav.imdbID) === -1
      ? dispatch({ type: "ADD_TO_FAVORITE", favorites: fav })
      : dispatch({ type: "REMOVE_FROM_FAVORITE", favorites: fav });
  };

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }} key={imdbID}>
        <Link style={navStyle} to={`/detail/${imdbID}`}>
          <img
            src={Poster}
            className="card-img-top"
            alt={Title}
            height="300px"
          />
        </Link>
        <div className="card-body row d-flex align-items-center">
          <h5 className="card-title col-9">
            <Link style={navStyle} to={`/detail/${imdbID}`}>
              {Title}
            </Link>
          </h5>
          {favorites.findIndex((fav) => fav.imdbID === imdbID) !== -1 ? (
            <span className="pl-2 col-3">
              <svg
                width="3em"
                height="3em"
                viewBox="0 0 16 16"
                className="bi bi-heart-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorite({ Title, imdbID });
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </span>
          ) : (
            <span className="pl-2 col-3">
              <svg
                width="3em"
                height="3em"
                viewBox="0 0 16 16"
                className="bi bi-heart"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorite({ Title, imdbID });
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
