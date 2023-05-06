import express from "express";
import {
    getflights,
    registerflight,
    findFlightId
  } from "../controller/flight.js";
const router = express.Router();
router.post("/registerflight", registerflight);
router.get("/:flightid", findFlightId);
router.get("/", getflights);
export default router;
