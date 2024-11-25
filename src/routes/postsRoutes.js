import express from "express";
import multer from "multer";
import cors from "cors";
import {
  listAllPosts,
  newPost,
  updateNewPost,
  uploadImage,
} from "../controllers/postsController.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

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
  app.use(cors(corsOptions));
  app.get("/posts", listAllPosts);
  app.post("/posts", newPost);
  app.post("/upload", upload.single("image"), uploadImage);
  app.put("/upload/:id", updateNewPost);
};

export default routes;
