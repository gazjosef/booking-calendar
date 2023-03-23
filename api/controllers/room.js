import Room from "../models/Room.js";
import Property from "../models/Property.js";

// CREATE ROOM
export const createRoom = async (req, res, next) => {
  const propertyId = req.params.propertyid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();

    try {
      await Property.findByIdAndUpdate(propertyId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

// UPDATE ROOM
export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE ROOM
export const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ROOM
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.find(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL ROOMS
export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};
