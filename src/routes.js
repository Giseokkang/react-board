const UPLOAD = "/upload";
const GET_POSTS = "/posts";
const API = "/api";
const POST_DETAIL = "/:id";
const ADD_COMMENT = "/:id/comment";
const DELETE_POST = "/:id/deletePost";

const routes = {
  upload: UPLOAD,
  getPosts: GET_POSTS,
  api: API,
  postDetail: POST_DETAIL,
  addComment: ADD_COMMENT,
  deletePost: DELETE_POST
};

export default routes;
