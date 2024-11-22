import fs from "fs";
import { getAllPosts, createNewPost, updatePost } from "../models/postsModel.js";

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

export async function updateNewPost(req, res) {
  const id = req.params.id;
  const urlImage = `http://localhost:3000/${id}.png`; //verificar se nao é /uploads
  const post = {
    imgUrl: urlImage,
    description: req.body.description,
    alt: req.body.alt,
  }
  try {
    const createdPost = await updatePost(id, post);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Error: "Failed to update post" });
  }
}
