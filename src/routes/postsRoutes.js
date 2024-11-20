import express from "express";
import { listAllPosts } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listAllPosts);
};

export default routes;
