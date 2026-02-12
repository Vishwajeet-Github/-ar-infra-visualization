import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("health-update", (incomingData) => {
      setData(incomingData);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>AR Infrastructure Dashboard</h1>
      {data ? (
        <>
          <p>CPU: {data.cpu}%</p>
          <p>Memory: {data.memory}%</p>
          <p>Status: {data.status}</p>
        </>
      ) : (
        <p>Waiting for data...</p>
      )}
    </div>
  );
}

export default App;
