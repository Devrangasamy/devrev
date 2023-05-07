import express from "express";
import {
    getflights,
    registerflight,
    findFlightId,
    deleteflight
  } from "../controller/flight.js";
const router = express.Router();
router.post("/registerflight", registerflight);
router.get("/:flightid", findFlightId);
router.get("/", getflights);
router.delete("/:id", deleteflight);
export default router;
