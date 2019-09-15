import Board from "../models/Board";

export const getPosts = async (req, res) => {
  try {
    const boards = await Board.find({});
    res.send(boards);
  } catch (error) {
    console.log(error);
  }
};

export const postUpload = async (req, res) => {
  const {
    body: {
      data: { title, desc, author }
    }
  } = req;
  try {
    const newPost = await Board.create({
      title,
      author,
      desc
    });
    console.log(newPost);
  } catch (e) {
    console.log(e);
  } finally {
    res.end();
  }
};

export const postDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const post = await Board.findById(id);
    res.send(post);
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Board.findByIdAndRemove(id);
  } catch (e) {
    console.log(e);
  } finally {
    res.end();
  }
};
