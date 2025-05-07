import api from "../api";

function getMovies() {
  return async (dispatch, getState) => {
    const popularMovies = await api.get("/movie/popular?language=en-US&page=1");
    console.log("ppp", popularMovies);

    const topRatedMovies = await api.get("/movie/top_rated?language=en-US&page=1");
    console.log("ttt", topRatedMovies);

    const upcomingMovies = await api.get("/movie/upcoming?language=en-US&page=1");
    console.log("uuu", upcomingMovies);

    // const url1 =
    //   "https://api.themoviedb.org/3/movie/popular?api_key=[api_key]&language=en-US&page=1";
    // const response1 = await fetch(url1);
    // const data1 = await response1.json();
    // console.log("ddd1", data1);

    // const url2 =
    //   "https://api.themoviedb.org/3/movie/top_rated?api_key=[api_key]&language=en-US&page=1";
    // const response2 = await fetch(url2);
    // const data2 = await response2.json();
    // console.log("ddd2", data2);

    // const url3 =
    //   "https://api.themoviedb.org/3/movie/upcoming?api_key=[api_key]&language=en-US&page=1";
    // const response3 = await fetch(url3);
    // const data3 = await response3.json();
    // console.log("ddd3", data3);
  };
}

export const movieAction = { getMovies };
