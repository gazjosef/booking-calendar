const asyncHandler = require("express-async-handler");

// *** GET ROOM
// @route   GET /api/rooms
// @access  Private
const getRoom = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Get Room ${req.params.id}`,
  });
});

// *** GET ALL ROOMS
// @route   GET /api/rooms
// @access  Private
const getAllRooms = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get All Rooms",
  });
});

// *** SET ROOM
// @route   POST /api/rooms
// @access  Private
const setRoom = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("Please add a text field");
  }

  res.status(200).json({
    message: "Set Room",
  });
});

// *** UPDATE ROOM
// @route   PUT /api/rooms/:id
// @access  Private
const updateRoom = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update Room ${req.params.id}`,
  });
});

// *** DELETE ROOM
// @route   DELETE /api/rooms/:id
// @access  Private
const deleteRoom = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete Room ${req.params.id}`,
  });
});

module.exports = {
  getRoom,
  getAllRooms,
  setRoom,
  updateRoom,
  deleteRoom,
};
