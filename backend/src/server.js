const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
 
const app = express();
const server = http.createServer(app);
 
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});
 
app.use(cors());
app.use(express.json());
 
app.get("/", (req, res) => {
    res.send("AR Infra Backend is running 🚀");
});
 
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);
 
    socket.emit("health-update", {
        server1: "green",
        server2: "yellow",
        server3: "red",
    });
 
    socket.on("disconnect", () => {
        console.log("Client disconneconst express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
 
const app = express();
const server = http.createServer(app);
 
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});
 
app.use(cors());
app.use(express.json());
 
app.get("/", (req, res) => {
    res.send("AR Infra Backend is running 🚀");
});
 
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);
 
    socket.emit("health-update", {
        server1: "green",
        server2: "yellow",
        server3: "red",
    });
 
    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});
 
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
});cted:", socket.id);
    });
});
 
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
});