import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import errorHandler from "./middleware/errorMiddleware.js";
import AppError from "./utils/AppError.js";

const app = express();

/* Port given by Dev1 */
const PORT = 4000;

/* Global Middleware */
app.use(cors());
app.use(express.json());

/* Test Route */
app.get("/", (req, res) => {
    logger.info("Home route accessed");
    res.json({
        message: "Backend server running on port 4000",
    });
});

/* Example error route */
app.get("/test-error", (req, res, next) => {
    next(new AppError("Test error occurred", 400));
});

/* 404 Handler */
app.use((req, res, next) => {
    next(new AppError("Route not found", 404));
});

/* Centralized Error Middleware */
app.use(errorHandler);

/* Start Server */
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});