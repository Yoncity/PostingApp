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

export const ADD_POST_BEGIN = "ADD_POST_BEGIN";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "ADD_POST_ERROR";
export const ADD_POST_FIELDS = "ADD_POST_FIELDS";
export const CLEAR_POST_FIELDS = "CLEAR_POST_FIELDS";

export const addPostFields = fields => ({
  type: ADD_POST_FIELDS,
  payload: { fields }
});

export const clearPostFields = () => ({
  type: CLEAR_POST_FIELDS
});

export const addPostBegin = () => ({
  type: ADD_POST_BEGIN
});

export const addPostSuccess = posts => ({
  type: ADD_POST_SUCCESS,
  payload: { posts }
});

export const addPostError = error => ({
  type: ADD_POST_ERROR,
  payload: { error }
});
