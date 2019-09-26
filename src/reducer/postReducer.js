import {
  FETCH_POST_BEGIN,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR
} from "../action/postAction";

const initialState = {
  posts: []
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_BEGIN:
      return { ...state, loading: true };

    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts
      };

    case FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.res
      };

    default:
      return state;
  }
}
