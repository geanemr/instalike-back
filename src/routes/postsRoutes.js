import express from "express";
import multer from "multer";
import {
  listAllPosts,
  newPost,
  uploadImage,
} from "../controllers/postsController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage }); //conf específica para Windows. Em outros SO não é necessária a propriedade storage

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listAllPosts);
  app.post("/posts", newPost);
  app.post("/upload", upload.single("image"), uploadImage);
};

export default routes;
