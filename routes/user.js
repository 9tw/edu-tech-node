const express = require("express");
const router = express.Router();
const {
  index,
  create,
  update,
  destroy,
  getUserById,
} = require("../controllers/userController");

router.get("/", index);
router.get("/:id", getUserById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
