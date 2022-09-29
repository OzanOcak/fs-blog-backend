import express from "express";

let articles = [
  {
    name: "learn-react",
    upvotes: 0,
    comments: [],
  },
  {
    name: "learn-node",
    upvotes: 0,
    comments: [],
  },
  {
    name: "mongodb",
    upvotes: 0,
    comments: [],
  },
];

const app = express();

app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articles.find((article) => article.name === name);

  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes`);
    res.status(201);
  } else {
    res.send("That article doesn't exist");
    res.status(404);
  }
});

app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articles.find((article) => article.name === name);

  if (article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
    res.status(201);
  } else {
    res.send("that article doesn't exist");
    res.status(404);
  }
});

app.listen(8000, () => {
  console.log(`the server listening the port 8000`);
});
