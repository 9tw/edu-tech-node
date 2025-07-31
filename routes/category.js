const express = require("express");
const router = express.Router();
const { index } = require("../controllers/categoryController");

router.get("/", index);

module.exports = router;
