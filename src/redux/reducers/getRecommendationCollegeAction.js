import {
    GET_RECOMMENDED_COLLEGE_REQUEST,
    GET_RECOMMENDED_COLLEGE_SUCCESS,
    GET_RECOMMENDED_COLLEGE_FAILURE,
} from '../types';

const initialState = {
    loadingStateForRecommendedColleges: false,
    recommendedColleges: [],
    error: '',
};

const recommendedCollegeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECOMMENDED_COLLEGE_REQUEST:
            return {
                ...state,
                loadingStateForRecommendedColleges: true,
                error: '',
            };
        case GET_RECOMMENDED_COLLEGE_SUCCESS:
            return {
                ...state,
                loadingStateForRecommendedColleges: false,
                recommendedColleges: action.payload,
            };
        case GET_RECOMMENDED_COLLEGE_FAILURE:
            return {
                ...state,
                loadingStateForRecommendedColleges: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default recommendedCollegeReducer;
