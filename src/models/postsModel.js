import connectToDatabase from "../config/dbConfig.js";

const connection = await connectToDatabase(process.env.STRING_CONEXAO);

export default async function getAllPosts() {
  const db = connection.db("imersao-instalike");
  const collection = db.collection("posts");
  return collection.find().toArray();
}
