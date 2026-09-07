import express from "express";

const app = express();
const port = 3004;

app.get("/", (req, res) => {
  res.send("<h1>Postman Practice</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/:username", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/:username", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/:username", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
