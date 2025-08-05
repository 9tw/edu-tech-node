const express = require("express");
const router = express.Router();
const {
  index,
  create,
  update,
  destroy,
  getByCategory,
  getProgramById,
} = require("../controllers/programController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", index);
router.get("/:id", getProgramById);
router.get("/category/:id", getByCategory);
router.post("/", authMiddleware, create);
router.put("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, destroy);

module.exports = router;
