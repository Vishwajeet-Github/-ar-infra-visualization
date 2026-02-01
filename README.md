# -ar-infra-visualization
AR Infrastructure Visualization Tool
📌 Overview

The AR Infrastructure Visualization Tool is an advanced DevOps-focused platform that visualizes cloud and container infrastructure in 3D/AR space. It represents servers, nodes, and services as interactive 3D objects, with real-time health status updates driven by live monitoring data.

This project bridges DevOps monitoring with Augmented Reality (AR) to make infrastructure observability more intuitive, visual, and actionable.

🎯 Problem Statement

Traditional DevOps dashboards:

Are 2D and data-heavy

Require manual interpretation of metrics

Make it difficult to understand system health at a glance

As infrastructure scales, understanding real-time system behavior becomes harder.

💡 Solution

This project solves the problem by:

Visualizing infrastructure as 3D objects

Using color-coded health indicators

Streaming live metrics to the AR scene

Allowing engineers to quickly identify issues visually

🧠 Key Features
🖥️ Infrastructure as 3D Objects

Kubernetes nodes, pods, or servers represented as 3D models

Logical grouping by cluster, namespace, or service

🎨 Health Status Visualization
Status	Color
Healthy	🟢 Green
Warning	🟡 Yellow
Critical	🔴 Red
Unknown	⚪ Grey
🔄 Real-Time Updates

Live metrics streamed via WebSockets

Automatic color & status changes without page refresh

🌐 AR / XR Support

Web-based AR using WebXR

Works on compatible browsers and devices

3D navigation and interaction

⚙️ DevOps Integration

Kubernetes API integration
Prometheus metrics support
Scalable architecture

🏗️ System Architecture
+-------------------+
| Kubernetes Cluster |
+---------+---------+
          |
          v
+-------------------+
| Prometheus Metrics |
+---------+---------+
          |
          v
+-------------------+
| Backend API (Node)|
| WebSocket Server  |
+---------+---------+
          |
          v
+-------------------+
| AR Frontend (XR)  |
| 3D Visualization |
+-------------------+

🛠️ Tech Stack

Frontend (AR)
React
Three.js
WebXR
WebSockets

Backend
Node.js
Express
WebSocket (Socket.io / ws)
Kubernetes Client API

DevOps & Monitoring
Docker
Kubernetes
Prometheus
Metrics Server

Collaboration & Tooling
GitHub (PRs, Issues, Actions)
Microsoft Teams (Project communication)

📂 Project Structure
ar-infra-visualization/
│
├── backend/
│   ├── src/
│   ├── ws/
│   ├── k8s-client/
│   └── package.json
│
├── ar-frontend/
│   ├── src/
│   ├── scenes/
│   ├── services/
│   └── package.json
│
├── infra/
│   ├── k8s/
│   ├── prometheus/
│   └── docker/
│
├── docs/
│   ├── architecture.md
│   └── api-contract.md
│
└── README.md

🚀 How It Works (Flow)

Prometheus collects cluster metrics

Backend fetches and processes metrics

Backend streams health data via WebSocket

AR frontend receives live updates

3D objects change color in real time

▶️ Getting Started (Local Setup)
Prerequisites

Node.js (v18+)

Docker

Kubernetes (Minikube / Kind)

Prometheus

Clone Repository
git clone https://github.com/Vishwajeet-Github/ar-infra-visualization.git
cd ar-infra-visualization

Backend Setup
cd backend
npm install
npm run dev

AR Frontend Setup
cd ar-frontend
npm install
npm run dev

🔐 Security & Best Practices

No hardcoded secrets

Environment-based configuration

Read-only cluster access

Role-based API permissions

👥 Collaboration Workflow

Feature-based Git branching

Pull Requests with code review

GitHub Issues for task tracking

Protected main branch

📈 Future Enhancements

VR headset support

Multi-cluster visualization

Alert overlays in AR

Historical metric playback

AI-based anomaly detection
