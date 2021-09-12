import React from "react";
import { Link, withRouter } from "react-router-dom";

const MoviesPage = ({ films }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ul>
        {films.map((el, i) => (
          <li key={i}>
            <Link
              to={{
                pathname: `/movie/${el}`,
                state: { movie: el },
              }}
            >
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(MoviesPage);
