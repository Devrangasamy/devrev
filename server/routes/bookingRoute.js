import express from "express";
import {
    getbooking,
    registerbooking,
    deletebooking,
    getbookings
  } from "../controller/booking.js";
const router = express.Router();
router.post("/registerbooking", registerbooking);
router.get("/", getbooking);
router.get("/:id", getbookings);
router.delete("/:id", deletebooking);
export default router;