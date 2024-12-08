const express = require("express");
const app = express();
const port = 3000;

app.get("/status", (req, res) => {
  res.send({ status: "OK", uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
