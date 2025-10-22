import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price)
      return res.status(400).json({ message: "Name and price required" });

    const newProduct = await createProduct(name, price, description);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    await updateProduct(req.params.id, name, price, description);
    res.json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeProduct = async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
