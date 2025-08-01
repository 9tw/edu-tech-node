const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();
const port = 3003;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
