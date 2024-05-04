import mongoose, { Schema, model } from "mongoose";
import Document from "mongoose";

// Define the interface for the document (instance of the model)
export interface IGoal extends Document {
  user: mongoose.Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const goalSchema: Schema<IGoal> = new mongoose.Schema(
  {
    user: {
      user: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

// Define the model
export const Goal = model<IGoal>("Goal", goalSchema);
