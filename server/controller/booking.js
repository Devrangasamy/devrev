import Booking from "../models/booking.js";
import Flight from "../models/flight.js";
export const addbooking=async(req,res,next)=>{
    const bookflight=new Booking(req.body);
    try{
        const flightdetails = await Flight.find({flightid:req.body.booking_details.flightid});
        if(flightdetails[0].booking_details.length>0 && req.body.noofseats<=flightdetails[0].booking_details.length){
            const update=await Flight.findOneAndUpdate({flightid:req.
                
                
                body.flight_details.flight_number},{$set:{Seatcount:flightdetails[0].Seatcount-req.body.total_seat}})
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