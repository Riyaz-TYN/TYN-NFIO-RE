import React from "react";

const Card = ({ title, children, padding = "24px" }) => {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {title && (
        <h3 style={{ margin: "0 0 16px", fontSize: "16px", fontWeight: 600, color: "#111827" }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card;
