import Booking from "../models/booking.js";
import Flight from "../models/flight.js";
export const registerbooking=async(req,res,next)=>{
  const bookflight=new Booking(req.body);
  // console.log(req.body);
  try{
      const flightdetails = await Flight.find({flightid:req.body.flightid});
      if(flightdetails[0].noofseats>0 && req.body.booking_details.length<=flightdetails[0].noofseats){
          const update=await Flight.findOneAndUpdate({flightid:req.body.flightid},{$set:{noofseats:flightdetails[0].noofseats-req.body.booking_details.length}})
          const savedflight= await bookflight.save();
          res.status(200).json(update);
      }
      else{
          res.json("seat unavailable");
      }
     
  }
  catch(err)
  {
      next(err);
  }
}
  export const getbooking = async (req, res, next) => {
    try {
      const book = await Booking.find();
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };