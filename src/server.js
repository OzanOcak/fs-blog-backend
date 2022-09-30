import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("database");

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("database");

  await db.collection("articles").updateOne({ name }, { $inc: { upvotes: 1 } });

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes`);
    res.status(201);
  } else {
    res.send("That article doesn't exist");
    res.status(404);
  }
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("database");

  await db
    .collection("articles")
    .updateOne({ name }, { $push: { comments: { postedBy, text } } });

  const article = await db.collection("articles").findOne({ name });

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
