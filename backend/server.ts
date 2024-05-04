import path from "path";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware";
import { connectDB } from "./config/db";
import goalRoutes from "./routes/goalRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const startServer = async () => {
  try {
    const port: number | string = process.env.PORT || 5001;

    await connectDB();
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use("/api/goals", goalRoutes);
    app.use("/api/users", userRoutes);

    app.use(errorHandler);

    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
