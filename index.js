const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  res.send("INSIDE SEARCH API..");
});

app.get("/view", (req, res) => {
  res.send("INSIDE VIEW API..");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
