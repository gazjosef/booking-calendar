import express from "express";
import {
  countByCity,
  countByType,
  createProperty,
  deleteProperty,
  getProperty,
  getProperties,
  updateProperty,
} from "../controllers/Property.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// * CREATE
router.post("/", verifyAdmin, createProperty);

// * UPDATE
router.put("/:id", verifyAdmin, updateProperty);

// * DELETE
router.delete("/:id", verifyAdmin, deleteProperty);

// * GET
router.get("/find/:id", getProperty);

// * GET ALL
router.get("/", getProperties);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
