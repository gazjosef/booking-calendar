import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  rooms: {
    type: [String],
  },

  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Property", PropertySchema);
