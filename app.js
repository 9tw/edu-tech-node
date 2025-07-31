const express = require("express");
const routes = require("./routes/index");

const app = express();
const port = 3003;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
