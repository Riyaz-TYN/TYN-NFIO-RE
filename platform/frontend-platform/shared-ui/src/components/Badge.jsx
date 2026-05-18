import React from "react";

const colors = {
  blue:   { background: "#dbeafe", color: "#1d4ed8" },
  green:  { background: "#dcfce7", color: "#15803d" },
  red:    { background: "#fee2e2", color: "#b91c1c" },
  yellow: { background: "#fef9c3", color: "#a16207" },
  gray:   { background: "#f3f4f6", color: "#374151" },
};

const Badge = ({ label, color = "blue" }) => {
  return (
    <span
      style={{
        ...colors[color],
        padding: "3px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
};

export default Badge;
