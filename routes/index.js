const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.use("/auth", require("./auth"));
router.use("/category", require("./category"));
router.use("/program", require("./program"));
router.use("/material", authMiddleware, require("./material"));
router.use("/user", authMiddleware, require("./user"));

router.use("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "EduTech backend is working",
  });
});

module.exports = router;
