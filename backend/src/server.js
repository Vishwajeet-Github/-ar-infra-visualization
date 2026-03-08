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
/* =========================
   Socket.io Configuration
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

/* =========================
   Middleware
app.use(cors());
app.use(express.json());

/* =========================
   Routes

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "AR Infra Backend is running 🚀",
    });
});

// Health check endpoint (Dev1 task)
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date(),
    });
});

// API status endpoint (Dev1 task)
app.get("/api/status", (req, res) => {
    res.status(200).json({
        api: "running",
        version: "1.0.0",
    });
});

/* =========================
   Socket Events
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    // Send initial infrastructure health status
    socket.emit("health-update", {
        server1: "green",
        server2: "yellow",
        server3: "red",
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
/* =========================
   404 Handler
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
    });
});

/* =========================
   Global Error Handler
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({
        error: "Internal Server Error",
    });
});

/* =========================
   Start Server
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
});