const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");

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
   Socket Events
========================= */
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

/* =========================
   Start Server
========================= */
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
});