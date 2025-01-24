import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import connectDB from "./config/db.js";
import invoiceRoutes from "./routes/invoiceRoute.js";

dotenv.config();
connectDB();

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: "https://finifi-lovat.vercel.app",
  })
);
app.use(express.json());

//remove it from production
// app.use(morgan("dev"));

app.use("/api/invoices", invoiceRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
