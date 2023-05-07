import express from "express";
import {
    getflights,
    registerflight,
    findFlightId,
    deleteflight,
    editflight
  } from "../controller/flight.js";
const router = express.Router();
router.post("/registerflight", registerflight);
router.get("/:flightid", findFlightId);
router.get("/", getflights);
router.delete("/:id", deleteflight);
router.post("/:id", editflight);
export default router;
