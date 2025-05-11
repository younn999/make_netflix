import React from "react";
import "./HomePage.style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../../redux/actions/movieAction";
import Banner from "./components/Banner/Banner";

// 1. 배너 만들기 => popularMovies 들고와서 첫번째 아이템 보여주기
// 2. popularMovies 가져오기
// 3. topRatedMovies 가져오기
// 4. upcomingMovies 가져오기
const HomePage = () => {
  const dispatch = useDispatch();
  const { popular, topRated, upcoming } = useSelector((state) => state.movie);
  console.log("home1", popular);
  // console.log("home2", topRated);
  // console.log("home3", upcoming);

  // 메인 화면이 열리자마자 API 호출
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <>
      {/* popular에 있는 첫번째 결과값을 넘겨준다. */}
      {popular.results && <Banner movie={popular.results[0]} />}
    </>
  );
};

export default HomePage;
