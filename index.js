const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  res.send("INSIDE SEARCH API..");
});




app.get("/view", (req, res) => {
  res.send("INSIDE VIEW API..");
});

app.post("/login", (req, res) => {
  res.send("INSIDE LOGOIN API..");
});

app.put("/updateprofile", (req, res) => {
  res.send("INSIDE UPDATE PROFILE API..");
});

app.delete("/del", (req, res) => {
  res.send("INSIDE DELETE API..");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
