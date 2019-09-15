import express from "express";
import Board from "../models/Board";
import routes from "../routes";
import {
  postUpload,
  getPosts,
  postDetail,
  deletePost
} from "../controller/boardContaroller";

const apiRouter = express.Router();

apiRouter.get(routes.getPosts, getPosts);
apiRouter.get(routes.postDetail, postDetail);

apiRouter.post(routes.upload, postUpload);
apiRouter.post(routes.deletePost, deletePost);

apiRouter.post(routes.addComment, () => console.log("add"));

export default apiRouter;
