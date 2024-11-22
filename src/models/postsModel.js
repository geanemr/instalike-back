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
  return collection.insertOne(newPost); //insertOne é do Mongodb
}
