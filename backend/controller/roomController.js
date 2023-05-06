const asyncHandler = require("express-async-handler");
const Room = require("../models/roomModel");

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
  const rooms = await Room.find();

  res.status(200).json(rooms);
});

// *** SET ROOM
// @route   POST /api/rooms
// @access  Private
const setRoom = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("Please add a text field");
  }

  const room = await Room.create({
    text: req.body.text,
  });

  res.status(200).json(room);
});

// *** UPDATE ROOM
// @route   PUT /api/rooms/:id
// @access  Private
const updateRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    res.status(400);
    throw new Error("Room not found");
  }

  const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedRoom);
});

// *** DELETE ROOM
// @route   DELETE /api/rooms/:id
// @access  Private
const deleteRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    res.status(400);
    throw new Error("Room not found");
  }

  await room.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRoom,
  getAllRooms,
  setRoom,
  updateRoom,
  deleteRoom,
};
