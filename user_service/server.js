import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("user Service is running");
});

app.listen(process.env.PORT, () => {
  console.log(`user Service running on port ${process.env.PORT}`);
});
