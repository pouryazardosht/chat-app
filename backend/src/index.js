import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log("server is running on port " + port);
  connectDB();
});
