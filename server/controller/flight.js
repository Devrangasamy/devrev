
import Flight from "../models/flight.js";

export const registerflight = async (req, res, next) => {
    try {
      const newFlight = new Flight(req.body);
      await newFlight.save();
      res.status(200).json({ status: "success", data: newFlight });
    } catch (err) {
      next(err);
    }
  };
  export const getflights = async (req, res, next) => {
    try {
const filter = { flightname: {"$regex":req.query.flightname} ,from: {"$regex":req.query.from},
to: {"$regex":req.query.to},flighttime: {"$lte":req.query.duration},
take_off: {"$gte":req.query.depature},land_off: {"$lte":req.query.arrival}};
      const flights = await Flight.find(filter);
      console.log(flights);
      res.status(200).json(flights);
    } catch (err) {
      console.log(req.query.depature);
      next(err);
    }
  };
  export const findFlightId = async (req, res, next) => {
    try {
      const flightid = req.params.flightid;
      const flight = await Flight.find({ flightid: flightid });
      res.status(200).json(flight);
    } catch (err) {
      next(err);
    }
  };
  export const deleteflight = async (req, res, next) => {
    try {
      const book = await Flight.findByIdAndDelete(req.params.id);
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };
  export const editflight = async (req, res, next) => {
    try {
      const book = await Flight.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };