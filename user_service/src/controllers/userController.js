import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import { createUser, findUserByEmail } from "../models/userModel.js";

export const register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  findUserByEmail(email, async (err, results) => {
    if (results && results.length > 0)
      return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    createUser(name, email, hashed, (err) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, async (err, results) => {
    if (!results || results.length === 0)
      return res.status(400).json({ message: "User not found" });

    const user = results[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  });
};

export const getUsers = (req, res) => {
  const sql = "SELECT id, name, email FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ message: "Server error" });
    }
    res.status(200).json(result);
  });
};
