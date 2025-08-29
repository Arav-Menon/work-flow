import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Backend is running perfectly</h1>");
});

app.get("/ops", (req, res) => {
  res.send("<h2>Ops is updated now</h2>")
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
