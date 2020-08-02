import React, { useState, useEffect } from "react";

function Detail(props) {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const { match } = props;
    const apiKey = "ea9e7b56";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${match.params.id}`;

    fetch(url)
      .then((res) => res.json())
      .then((detail) => {
        setMovieDetails(detail);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="detail my-4">
        <div className="poster">
          <img src={movieDetails["Poster"]} alt="" />
        </div>
        <div className="card detail-card w-75 mx-4" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{movieDetails["Title"]}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {movieDetails["Genre"]}
            </h6>
            <p className="card-text mb-2">Plot: {movieDetails["Plot"]}</p>
            <h6 className="card-subtitle">Ratings:</h6>
            {movieDetails.Ratings
              ? movieDetails.Ratings.map(({ Source, Value }) => (
                  <div>
                    {Source}:{Value}
                  </div>
                ))
              : null}
            <h6 className="card-subtitle mt-2">
              Ratings:{movieDetails["BoxOffice"]}
            </h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Detail;
