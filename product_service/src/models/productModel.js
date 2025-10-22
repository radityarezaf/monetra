import pool from "../config/db.js";

export const getAllProducts = async () => {
  const [rows] = await pool.query("SELECT * FROM products");
  return rows;
};

export const getProductById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

export const createProduct = async (name, price, description) => {
  const [result] = await pool.query(
    "INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
    [name, price, description]
  );
  return { id: result.insertId, name, price, description };
};

export const updateProduct = async (id, name, price, description) => {
  await pool.query(
    "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?",
    [name, price, description, id]
  );
};

export const deleteProduct = async (id) => {
  await pool.query("DELETE FROM products WHERE id = ?", [id]);
};
