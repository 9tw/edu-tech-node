const express = require("express");
const router = express.Router();
const { index } = require("../controllers/materialController");

router.get("/", index);

module.exports = router;
