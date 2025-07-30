const express = require("express");

const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Rest API is working",
  });
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
