const express = require("express");
const cors = require("cors");

const app = express();

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

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date(),
    });
});

// API status endpoint
app.get("/api/status", (req, res) => {
    res.status(200).json({
        api: "running",
        version: "1.0.0",
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

module.exports = app;