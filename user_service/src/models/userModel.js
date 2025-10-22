import db from "../config/db.js";

export const createUser = (name, email, password, callback) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], callback);
};

export const findUserByEmail = (email, callback) => { 
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], callback);
};

export const getAllUsers = (callback) => {
    const sql = "SELECT id, name, email FROM users";
    db.query(sql, callback);
};
