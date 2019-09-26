import {
  VIEW_POST_BEGIN,
  VIEW_POST_SUCCESS,
  VIEW_POST_ERROR
} from "../action/postAction";

const initialState = {
  posts: []
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_POST_BEGIN:
      return { ...state, loading: true };

    case VIEW_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts
      };

    case VIEW_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.res
      };

    default:
      return state;
  }
}
