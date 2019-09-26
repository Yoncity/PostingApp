import {
  FETCH_POST_BEGIN,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  ADD_POST_BEGIN,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  ADD_POST_FIELDS,
  CLEAR_POST_FIELDS
} from "../action/postAction";

const initialState = {
  posts: [],
  post_fields: {
    title: null,
    body: null
  }
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST_FIELDS:
      return {
        ...state,
        post_fields: action.payload.fields
      };
    case CLEAR_POST_FIELDS:
      return {
        ...state,
        post_fields: {
          title: null,
          body: null
        }
      };
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

    case ADD_POST_BEGIN:
      return { ...state, loading: true };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts
      };

    case ADD_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.res
      };

    default:
      return state;
  }
}
