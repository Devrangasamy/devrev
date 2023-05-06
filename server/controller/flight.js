
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
      const flight = await Flight.find();
      res.status(200).json(flight);
    } catch (err) {
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