import fs from "fs";
import { getAllPosts, createNewPost } from "../models/postsModel.js";

export async function listAllPosts(req, res) {
  const posts = await getAllPosts();
  res.status(200).json(posts);
}

export async function newPost(req, res) {
  const newPost = req.body;
  try {
    const createdPost = await createNewPost(newPost);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Request failed." });
  }
}

export async function uploadImage(req, res) {
  const newPost = req.body;
  try {
    const createdPost = await createNewPost(newPost);
    const updatedImage = `uploads/${createdPost.insertedId}.png`;
    fs.renameSync(req.file.path, updatedImage);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Request failed." });
  }
}
