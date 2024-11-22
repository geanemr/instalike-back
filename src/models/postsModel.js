import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js";

const connection = await connectToDatabase(process.env.STRING_CONEXAO);

export async function getAllPosts() {
  const db = connection.db("imersao-instalike");
  const collection = db.collection("posts");
  return collection.find().toArray();
}

export async function createNewPost(newPost) {
  const db = connection.db("imersao-instalike");
  const collection = db.collection("posts");
  return collection.insertOne(newPost); //insertOne é do Mongodb.
}

export async function updatePost(id, newPost) {
  const db = connection.db("imersao-instalike");
  const collection = db.collection("posts");
  const objectId = ObjectId.createFromHexString(id); //neste objeto guardamos o id do post que queremos atualizar.
  return collection.updateOne({_id: new ObjectId(objectId)},{$set:newPost}); //indica o id que quer atualizar e com quais dados.
}
