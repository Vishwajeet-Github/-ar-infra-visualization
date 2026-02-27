const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

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
   Middleware
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   Routes
========================= */

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
========================= */
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    // Send initial infrastructure health status
    socket.emit("health-update", {
        server1: "green",
        server2: "yellow",
        server3: "red",
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

/* =========================
   404 Handler
========================= */
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
    });
});

/* =========================
   Global Error Handler
========================= */
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({
        error: "Internal Server Error",
    });
});

/* =========================
   Start Server
========================= */
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
});