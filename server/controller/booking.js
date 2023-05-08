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
      console.log(req.query.customername);
      
      const filter={customer_name  : {"$regex" : req.query.customername}}
    
      const book = await Booking.find(filter)
      .populate({path:'flight',match:{ flightname  : {"$regex" : req.query.flightname},
      from: {"$regex":req.query.from},
      to: {"$regex":req.query.to},
      take_off: {"$gte":req.query.depature},
      land_off: {"$lte":req.query.arrival}
    }}).exec();
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };

  export const deletebooking = async (req, res, next) => {
    try {
      const book = await Booking.findById(req.params.id);
      const flightdetails = await Flight.find({_id:book.flight});
      const update=await Flight.findOneAndUpdate({_id:book.flight},{$set:{noofseats:flightdetails[0].noofseats+book.booking_details.length}})
      const a = await Booking.findByIdAndDelete(req.params.id);
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };
  export const getbookings = async (req, res, next) => {
    try {
      const book = await Booking.find({ user: req.params.id }).populate("user flight");
      console.log(book)
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };