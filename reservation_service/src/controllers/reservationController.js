import {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
} from "../models/reservationModel.js";

const FIXED_PRICE = 500000;

export const getReservations = async (req, res) => {
  try {
    const reservations = await getAllReservations();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReservation = async (req, res) => {
  try {
    const reservation = await getReservationById(req.params.id);
    if (!reservation)
      return res.status(404).json({ message: "Reservation not found" });
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addReservation = async (req, res) => {
  try {
    const { name, notes, date } = req.body;

    // Validasi input wajib
    if (!name || !date) {
      return res.status(400).json({ message: "Name and date are required" });
    }

    // total_price langsung diisi dari server
    const newReservation = await createReservation(
      name,
      notes || "",
      date,
      FIXED_PRICE
    );

    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editReservation = async (req, res) => {
  try {
    const { name, notes, date } = req.body;
    await updateReservation(req.params.id, name, notes, date);
    res.json({ message: "Reservation updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeReservation = async (req, res) => {
  try {
    await deleteReservation(req.params.id);
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
