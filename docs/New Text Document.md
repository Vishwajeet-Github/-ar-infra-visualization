# AR Infrastructure Visualization Tool – Project Documentation

## 📌 Project Purpose
This project visualizes IT infrastructure (servers) as **3D objects** and displays their **real-time health status** using colors.  
It helps understand server performance in an interactive and visual way and is designed to be **AR-ready**.

---

## 🗂️ Project Structure
ar-infra-visualizer/
│
├── backend/
│ ├── server.js # Backend entry point
│ ├── metrics.js # Server metrics logic
│ ├── socket.js # WebSocket handling
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Dashboard.jsx
│ │ │ └── ServerDetails.jsx
│ │ │
│ │ ├── three/
│ │ │ ├── ServerCube.jsx
│ │ │ └── Scene.jsx
│ │ │
│ │ ├── services/
│ │ │ └── socket.js
│ │ │
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ └── package.json
│
├── README.md
└── PROJECT_DOCUMENTATION.md


---

## 🔄 Project Flow
1. Backend generates server metrics (CPU, RAM)
2. Health status is calculated based on thresholds
3. Data is sent to frontend using WebSockets
4. Frontend receives updates in real time
5. 3D server models update color dynamically
6. User interacts with the visualization

---

## 🧠 System Architecture
Metrics Generator
↓
Backend (Node.js + Express)
↓
WebSocket (Socket.IO)
↓
Frontend (React)
↓
3D Visualization (Three.js)
↓
AR Layer (Future Scope)


---

## 🚦 Health Status Logic
- CPU < 80% → Healthy (Green)
- CPU 80–90% → Warning (Yellow)
- CPU > 90% → Critical (Red)

---

## 🛠️ Tech Stack
**Frontend**
- React
- Three.js / React Three Fiber
- Socket.IO Client

**Backend**
- Node.js
- Express
- Socket.IO

---

## 🚀 Future Enhancements
- Augmented Reality using WebXR
- Multiple servers and rack visualization
- Alerts and notifications
- Historical performance charts
- Kubernetes and cloud integration

---

## 💼 Resume Description
Built a real-time 3D infrastructure visualization tool using React, Node.js, WebSockets, and Three.js to monitor server health dynamically.
