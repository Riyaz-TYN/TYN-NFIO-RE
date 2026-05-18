import React from "react";

const StatsCard = ({ title, value, subtitle, color = "#2563eb", icon = "📊" }) => {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px 24px",
        borderTop: `4px solid ${color}`,
        flex: 1,
        minWidth: "160px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", fontWeight: 500 }}>{title}</p>
        <span style={{ fontSize: "20px" }}>{icon}</span>
      </div>
      <h2 style={{ margin: "8px 0 4px", fontSize: "30px", fontWeight: 700, color: "#111827" }}>
        {value}
      </h2>
      <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af" }}>{subtitle}</p>
    </div>
  );
};

export default StatsCard;
