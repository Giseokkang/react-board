import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000/" });

export const getPosts = () => api.get("/api/posts");
export const postDetail = id => api.get(`/api/${id}`);

export const upload = data => api.post("/api/upload", { data });
export const deletePost = id => api.post(`/api/${id}/deletePost`);
