import express from "express";
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello");
  res.status(200);
});

app.post("/hey", (req, res) => {
  console.log(req.body);
  res.send(`hey ${req.body.name}`);
  res.status(200);
});
app.listen(8000, () => {
  console.log(`the server listening the port 8000`);
});
