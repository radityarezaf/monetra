import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRoutes from "./routes/reservationRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/reservation", reservationRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Reservation Service running on port ${PORT}`));
