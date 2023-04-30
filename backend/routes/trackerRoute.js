const express = require("express");
const router = express.Router();

const Tracker = require("../models/Tracker");

/*
  CREATE NEW TRACKER
  ROUTE: /api/tracker
  PAYLOAD: { username, title, desc, rating, lat, log }
*/

router.get("/", async (req, res) => {
  try {
    const trackers = await Tracker.find();
    res.status(200).send(trackers);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/create", async (req, res) => {
  const newTracker = new Tracker(req.body);

  try {
    const tracker = await newTracker.save();
    res.status(200).json(tracker);
  } catch (err) {
    res.status(500).json("Error: " + err);
  }
});

module.exports = router;
