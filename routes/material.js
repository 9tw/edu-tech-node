const express = require("express");
const router = express.Router();
const {
  index,
  create,
  update,
  destroy,
  getByProgram,
  getMaterialById,
  getMaterialByProgramIdAndSeq,
  getMaterialLastSeq,
} = require("../controllers/materialController");

router.get("/", index);
router.get("/seq", getMaterialByProgramIdAndSeq);
router.get("/last-seq", getMaterialLastSeq);
router.get("/:id", getMaterialById);
router.get("/program/:id", getByProgram);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
