import React from "react";
import { useStateValue } from "./StateProvider";

function Favorites() {
  const [{ favorites }, dispatch] = useStateValue();

  return favorites.map(({ Title, imdbID }) => (
    <div className="card mt-4">
      <div className="card-body">
        {Title}
        <small className="ml-4">{imdbID}</small>
      </div>
    </div>
  ));
}

export default Favorites;
