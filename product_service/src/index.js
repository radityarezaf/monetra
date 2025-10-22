import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`✅ Product Service running on port ${PORT}`));
