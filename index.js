const express = require("express");

const app = express();

const port = 3001;

app.get("/", (req, res) => {
  res.send("Goodbye World!!!!!");
});

app.listen(port, () => {
  console.log(`Now running on PORT ${port}`);
});
