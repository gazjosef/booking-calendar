import mongoose, { Schema, model, Document } from "mongoose";
// import Document from "mongoose";

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
      type: mongoose.Schema.Types.ObjectId, // Corrected this line
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
