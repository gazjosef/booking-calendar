const express = require("express");
const router = express.Router();
const {
  getRoom,
  getAllRooms,
  setRoom,
  updateRoom,
  deleteRoom,
} = require("../controller/roomController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getAllRooms).post(protect, setRoom);

router
  .route("/:id")
  .get(getRoom)
  .put(protect, updateRoom)
  .delete(protect, deleteRoom);

module.exports = router;
