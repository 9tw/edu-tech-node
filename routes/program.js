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

router.get("/", index);
router.get("/:id", getProgramById);
router.get("/category/:id", getByCategory);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
