import React from "react";

const Banner = ({ movie }) => {
  console.log("mmm", movie);
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

export default Banner;
