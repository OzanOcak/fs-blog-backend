import express from "express";
const app = express();

app.get("/hello", (req, res) => {
  res.send("hello");
  res.status(200);
});
app.listen(8000, () => {
  console.log(`the server listening the port 8000`);
});
