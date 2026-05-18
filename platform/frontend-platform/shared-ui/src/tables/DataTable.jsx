import React, { useState } from "react";

const DataTable = ({ columns, rows, onRowClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ overflowX: "auto", borderRadius: "10px", border: "1px solid #e5e7eb" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
        <thead>
          <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  fontWeight: 600,
                  color: "#374151",
                  fontSize: "13px",
                  whiteSpace: "nowrap",
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              onClick={() => onRowClick && onRowClick(row)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderBottom: "1px solid #f3f4f6",
                background: hovered === i ? "#f0f9ff" : "#fff",
                cursor: onRowClick ? "pointer" : "default",
                transition: "background 0.15s",
              }}
            >
              {columns.map((col) => (
                <td key={col.key} style={{ padding: "12px 16px", color: "#374151" }}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
