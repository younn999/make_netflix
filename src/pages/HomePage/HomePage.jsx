import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../../redux/actions/movieAction";

const HomePage = () => {
  const dispatch = useDispatch();
  // 메인 화면이 열리자마자 API 호출
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
