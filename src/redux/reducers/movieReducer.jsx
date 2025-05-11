const initialState = {
  popular: {},
  topRated: {},
  upcoming: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popular: payload.popular,
        topRated: payload.topRated,
        upcoming: payload.upcoming,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
