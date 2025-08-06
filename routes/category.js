const express = require("express");
const router = express.Router();
const {
  index,
  create,
  update,
  destroy,
} = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", index);
router.post("/", authMiddleware, create);
router.put("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, destroy);

module.exports = router;
