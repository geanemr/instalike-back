import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
routes(app);

app.listen(3000, () => {
  console.log("servidor escutando...");
});

// function getPostsById(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }

// app.get("/posts/:id", (req, res) => {
//   const index = getPostsById(req.params.id);
//   console.log(req.params);
//   res.status(200).json(posts[index]);
//   //http://localhost:3000/posts/1
// });
