import express from "express";
import {
  getReservations,
  getReservation,
  addReservation,
  editReservation,
  removeReservation,
} from "../controllers/reservationController.js";

const router = express.Router();
router.get("/", getReservations);
router.get("/:id", getReservation);
router.post("/", addReservation);
router.put("/:id", editReservation);
router.delete("/:id", removeReservation);

export default router;
