const express = require("express");
const router = express.Router();

const Tracker = require('../models/Tracker')

router.get("/", (req, res) => {
  res.send("Tracker Route");
});

// router.post("/", (req, res) => {});
module.exports = router