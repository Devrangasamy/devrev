import mongoose from "mongoose";
const { Schema } = mongoose;
const BookingSchema = new Schema(
  {
    booking_id:{
      type: String,
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
    customer_number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("booking", BookingSchema);
