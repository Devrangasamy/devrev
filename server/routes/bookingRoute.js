import express from "express";
import {
    getbooking,
    registerbooking
  } from "../controller/booking.js";
const router = express.Router();
router.post("/registerbooking", registerbooking);
router.get("/", getbooking);
export default router;