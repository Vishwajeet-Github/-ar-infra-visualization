import { useEffect, useState } from "react";
import socket from "../services/socket";
import MetricsCard from "./metricsCard";

function dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    socket.on("health-update", (incomingData) => {
      setData(incomingData);
    });

    return () => socket.off("health-update");
  }, []);

  const getColor = (status) => {
    if (status === "green") return "lime";
    if (status === "yellow") return "orange";
    return "red";
  };

  return (
    <div style={{ padding: "40px",color:"white"}}>
        <h1 style={{ marginBottom: "40px" }}>
      AR Infrastructure Dashboard</h1>

      {data ? (
        <div style={{ display: "flex", gap: "30px", marginTop: "30px",flexWrap: "wrap", }}>
          <MetricsCard
            title="CPU Usage"
            value={`${data.cpu}%`}
            color={getColor(data.status)}
          />
          <MetricsCard
            title="Memory Usage"
            value={`${data.memory}%`}
            color={getColor(data.status)}
          />
          <MetricsCard
            title="Server Status"
            value={data.status}
            color={getColor(data.status)}
          />
        </div>
      ) : (
        <p>Waiting for server data...</p>
      )}
    </div>
  );
}

export default dashboard;
