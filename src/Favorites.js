import React from "react";
import { useStateValue } from "./StateProvider";

function Favorites() {
  const [{ favorites }, dispatch] = useStateValue();

  return favorites.map(({ Title, imdbID }) => (
    <div class="card mt-4">
      <div class="card-body">
        {Title}
        <small className="ml-4">{imdbID}</small>
      </div>
    </div>
  ));
}

export default Favorites;
