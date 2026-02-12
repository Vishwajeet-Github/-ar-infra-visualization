function metricsCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#1e1e1e",
        padding: "20px",
        borderRadius: "10px",
        width: "200px",
        textAlign: "center",
        color: "white",
        border: `2px solid ${color}`,
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default metricsCard;
