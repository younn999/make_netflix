import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  
  return <div>HomePage</div>;
};

export default HomePage;
