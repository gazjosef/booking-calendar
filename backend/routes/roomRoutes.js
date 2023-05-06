const express = require("express");
const router = express.Router();
const {
  getRoom,
  getAllRooms,
  setRoom,
  updateRoom,
  deleteRoom,
} = require("../controller/roomController");

router.route("/").get(getAllRooms).post(setRoom);

router.route("/:id").get(getRoom).put(updateRoom).delete(deleteRoom);

module.exports = router;
