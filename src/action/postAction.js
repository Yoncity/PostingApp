export const FETCH_POST_BEGIN = "FETCH_POST_BEGIN";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

export const fetchPostBegin = () => ({
  type: FETCH_POST_BEGIN
});

export const fetchPostSuccess = posts => ({
  type: FETCH_POST_SUCCESS,
  payload: { posts }
});

export const fetchPostError = error => ({
  type: FETCH_POST_ERROR,
  payload: { error }
});
