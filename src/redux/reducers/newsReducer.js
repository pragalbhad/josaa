const initialState = {
    loadingStateForNewReducer: false,
    newsItems: [],
    error: "",
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_NEWS_REQUEST":
        return { ...state, loadingStateForNewReducer: true };
      case "FETCH_NEWS_SUCCESS":
        return { loadingStateForNewReducer: false, newsItems: action.payload, error: "" };
      case "FETCH_NEWS_FAILURE":
        return { loadingStateForNewReducer: false, newsItems: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default newsReducer;
  