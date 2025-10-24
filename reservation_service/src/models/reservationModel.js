import pool from "../config/db.js";

export const getAllReservations = async () => {
  const [rows] = await pool.query("SELECT * FROM reservations ORDER BY date DESC");
  return rows;
};

export const getReservationById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM reservations WHERE id = ?", [id]);
  return rows[0];
};

export const createReservation = async (name, notes, date, total_price) => {
  const [result] = await pool.query(
    "INSERT INTO reservations (name, notes, date, total_price) VALUES (?, ?, ?, ?)",
    [name, notes, date, total_price]
  );
  return { id: result.insertId, name, notes, date, total_price };
};

export const updateReservation = async (id, name, notes, date) => {
  await pool.query(
    "UPDATE reservations SET name = ?, notes = ?, date = ? WHERE id = ?",
    [name, notes, date, id]
  );
};

export const deleteReservation = async (id) => {
  await pool.query("DELETE FROM reservations WHERE id = ?", [id]);
};
