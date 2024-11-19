import express from "express";

const posts = [
  {
    id: 1,
    descricao: "foto de gato",
    imagem: `https://placecats.com/millie/300/150`,
  },
  {
    id: 2,
    descricao: "gato brincando",
    imagem: `https://placecats.com/millie/300/151`,
  },
  {
    id: 3,
    descricao: "gato correndo",
    imagem: `https://placecats.com/millie/300/152`,
  },
];
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("servidor escutando");
});

app.get("/posts", (req, res) => { //http://localhost:3000/posts
  res.status(200).json(posts);
});

function getPostsById(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = getPostsById(req.params.id);
  res.status(200).json(posts[index]); //http://localhost:3000/posts/1
});
