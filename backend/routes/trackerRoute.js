const express = require("express");
const router = express.Router();

const Tracker = require("../models/Tracker");

/*
  CREATE NEW TRACKER
  ROUTE: /api/tracker
  PAYLOAD: { username, title, desc, rating, lat, log }
*/

router.post("/", async (req, res) => {
  const newTracker = new Tracker(req.body);

  try {
    const tracker = await newTracker.save();
    res.status(200).json(tracker);
  } catch (err) {
    res.status(500).json("Error: " + err);
  }
});

module.exports = router;
