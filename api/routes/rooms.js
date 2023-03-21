import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.js";

const router = express.Router();

// CREATE
router.post("/", createRoom);

// UPDATE
router.put("/:id", updateRoom);

// DELETE
router.delete("/:id", deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRooms);

export default router;
