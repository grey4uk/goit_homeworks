import React from "react";
import { withRouter } from "react-router-dom";

const DetailedMovie = (props) => {
  console.log(`props`, props);
  const { movie } = props?.location?.state;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>CHOOSEN FILM</h2>
      <p>{movie}</p>
    </div>
  );
};

export default withRouter(DetailedMovie);
