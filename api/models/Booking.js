import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
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

export default mongoose.model("Booking", BookingSchema);
