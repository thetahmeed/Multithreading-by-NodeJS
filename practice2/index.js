const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;

let visitorCounter = 0;

app.get("/", (req, res) => {
  visitorCounter++;

  res.send({
    msg: "Visitor(s): " + visitorCounter,
  });
});

app.get("/load", (req, res) => {
  for (let index = 0; index < 1_00_00_00_00000000000000; index++) {
    //
  }

  console.log("It's done!");

  res.send({
    msg: "Will load 10,000,000 images",
  });
});

app.listen(PORT, () => {
  console.log("Server on http://localhost:" + PORT);
});
