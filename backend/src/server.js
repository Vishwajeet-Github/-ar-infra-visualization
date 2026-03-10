import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import logger from "./utils/logger.js";
import errorHandler from "./middleware/errorMiddleware.js";
import AppError from "./utils/AppError.js";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

/* =========================
   Global Middleware
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   Routes
========================= */

app.get("/", (req, res) => {
    logger.info("Home route accessed");
    res.json({
        message: "Backend server running 🚀",
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date(),
    });
});

app.get("/api/status", (req, res) => {
    res.status(200).json({
        api: "running",
        version: "1.0.0",
    });
});

/* Example error route */
app.get("/test-error", (req, res, next) => {
    next(new AppError("Test error occurred", 400));
});

/* =========================
   Socket.io Configuration
========================= */
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

/* =========================
   Socket Events
========================= */
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.emit("health-update", {
        server1: "green",
        server2: "yellow",
        server3: "red",
    });
});

/* =========================
   404 Handler
========================= */
app.use((req, res, next) => {
    next(new AppError("Route not found", 404));
});

/* =========================
   Global Error Handler
========================= */
app.use(errorHandler);

/* =========================
   Start Server
========================= */
server.listen(PORT, () => {
    logger.info(`✅ Backend server running on http://localhost:${PORT}`);
});