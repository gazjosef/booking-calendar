const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Rooms" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Book Room" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update Room ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete Room ${req.params.id}` });
});

module.exports = router;
