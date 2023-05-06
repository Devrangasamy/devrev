import mongoose from "mongoose";
const { Schema } = mongoose;
const FlightSchema = new Schema(
  {
    flightid:{
      type: String,
      required: true,
    },
    flightname:{
      type: String,
      required: true,
    },
    flighttime:{
      type: Number,
      required:true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    noofseats:{
      type: Number,
      default:60,
      min:0,
      max:60
    },
    take_off: {
      type: Date,
      required: true,
    },
    land_off: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Flight", FlightSchema);
