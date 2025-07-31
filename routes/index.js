const express = require("express");
const router = express.Router();

router.use("/category", require("./category"));
router.use("/program", require("./program"));
router.use("/material", require("./material"));
router.use("/user", require("./user"));

router.use("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "EduTech backend is working",
  });
});

module.exports = router;
