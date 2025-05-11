import api from "../api";

function getMovies() {
  return async (dispatch, getState) => {
    const url1 = api.get("/movie/popular?language=en-US&page=1");
    // console.log("ppp", url1);
    const url2 = api.get("/movie/top_rated?language=en-US&page=1");
    // console.log("ttt", url2);
    const url3 = api.get("/movie/upcoming?language=en-US&page=1");
    // console.log("uuu", url3);

    // 서로 연관이 없는 데이터이므로 한꺼번에 불러준다.
    const [popularApi, topRatedApi, upcomingApi] = await Promise.all([
      url1,
      url2,
      url3,
    ]);
    // console.log("popular", popularApi);
    // console.log("topRated", topRatedApi);
    // console.log("upcoming", upcomingApi);

    // movieReducer를 호출한다.
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {  // 데이터만 뽑아서 reducer로 보낸다.
        popular: popularApi.data,
        topRated: topRatedApi.data,
        upcoming: upcomingApi.data,
      },
    });

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
