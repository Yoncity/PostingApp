export const VIEW_POST_BEGIN = "VIEW_POST_BEGIN";
export const VIEW_POST_SUCCESS = "VIEW_POST_Success";
export const VIEW_POST_ERROR = "VIEW_POST_Error";

export const viewPostBegin = () => ({
  type: VIEW_POST_BEGIN
});

export const viewPostSuccess = posts => ({
  type: viewPostSuccess,
  payload: { posts }
});

export const viewPostError = error => ({
  type: viewPostError,
  payload: { error }
});
