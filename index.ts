import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Backend is running perfectly</h1>");
});

app.get("/ops", (req, res) => {
  res.send("<h1>Ops is updated now</h1>")
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
