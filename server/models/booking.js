import mongoose from "mongoose";
import user from "./user.js";
import flight from "./flight.js";

const { Schema } = mongoose;
const BookingSchema = new Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref:user,
      required: true,
    },
    flight:{
        type: mongoose.Schema.Types.ObjectId,
        ref:flight,
      required: true,
    },
    flightid:{
      type: String,
    required: true,
  },
    customer_name:{
      type: String,
      required: true,
    },

    booking_details:[{
          name: {
            type: String,
          },
          seat_no: {
            type: Number
          },
          age: {
            type: Number
          },
          phone_no: {
            type:Number,
          }
        }],
  },
  { timestamps: true }
);

export default mongoose.model("booking", BookingSchema);
