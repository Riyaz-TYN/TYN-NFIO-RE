import React from "react";

const variants = {
  primary:   { background: "#2563eb", color: "#fff",     border: "none" },
  secondary: { background: "#f3f4f6", color: "#111827",  border: "1px solid #d1d5db" },
  danger:    { background: "#dc2626", color: "#fff",     border: "none" },
  success:   { background: "#16a34a", color: "#fff",     border: "none" },
};

const Button = ({ label, onClick, variant = "primary", disabled = false, fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variants[variant],
        padding: "9px 20px",
        borderRadius: "8px",
        fontWeight: 600,
        fontSize: "14px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? "100%" : "auto",
        transition: "opacity 0.2s",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
