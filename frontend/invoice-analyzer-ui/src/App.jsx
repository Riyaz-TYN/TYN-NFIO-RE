import React, { useState } from "react";
import { Button, Badge, Card, StatsCard, DataTable } from "@tyn/shared-ui";

// ─── Sample Data ───────────────────────────────────────────────
const invoices = [
  { id: "INV-001", client: "Acme Corp",     amount: "₹84,000",  status: "Processed", date: "2025-05-10" },
  { id: "INV-002", client: "TechSoft Ltd",  amount: "₹1,20,000", status: "Pending",   date: "2025-05-12" },
  { id: "INV-003", client: "GlobalTrade",   amount: "₹45,500",  status: "Processed", date: "2025-05-13" },
  { id: "INV-004", client: "Sunrise Inc",   amount: "₹2,00,000", status: "Failed",    date: "2025-05-14" },
  { id: "INV-005", client: "BlueSky Corp",  amount: "₹67,000",  status: "Pending",   date: "2025-05-15" },
];

const columns = [
  { key: "id",     label: "Invoice ID" },
  { key: "client", label: "Client"     },
  { key: "amount", label: "Amount"     },
  { key: "status", label: "Status"     },
  { key: "date",   label: "Date"       },
];

// Map status to Badge color
const statusColor = { Processed: "green", Pending: "yellow", Failed: "red" };

// ─── App ────────────────────────────────────────────────────────
export default function App() {
  const [selected, setSelected] = useState(null);

  // Add badge to each row's status column
  const rows = invoices.map((inv) => ({
    ...inv,
    status: <Badge label={inv.status} color={statusColor[inv.status]} />,
  }));

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "sans-serif" }}>

      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 700, fontSize: "18px", color: "#111827" }}>🧾 Invoice Analyzer</span>
          <span style={{ marginLeft: "10px", fontSize: "13px", color: "#6b7280" }}>TYN Platform</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button label="Upload Invoice" onClick={() => alert("Upload clicked!")} />
          <Button label="Export" variant="secondary" onClick={() => alert("Exported!")} />
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: "32px", maxWidth: "1100px", margin: "0 auto" }}>

        {/* Stats Row — using StatsCard from shared-ui */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "28px", flexWrap: "wrap" }}>
          <StatsCard title="Total Invoices"  value="1,284" subtitle="All time"       color="#2563eb" icon="📄" />
          <StatsCard title="Processed"       value="1,102" subtitle="86% completed"  color="#16a34a" icon="✅" />
          <StatsCard title="Pending Review"  value="142"   subtitle="Needs action"   color="#f59e0b" icon="⏳" />
          <StatsCard title="Failed"          value="40"    subtitle="Requires retry" color="#dc2626" icon="❌" />
        </div>

        {/* Table Card — using Card + DataTable from shared-ui */}
        <Card title="Recent Invoices">
          <DataTable
            columns={columns}
            rows={rows}
            onRowClick={(row) => setSelected(row)}
          />
        </Card>

        {/* Selected Invoice Detail */}
        {selected && (
          <div style={{ marginTop: "20px" }}>
            <Card title="Selected Invoice">
              <p style={{ margin: "0 0 12px", color: "#374151", fontSize: "14px" }}>
                You clicked on: <strong>{selected.id}</strong> — {selected.client}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button label="Analyze this Invoice" onClick={() => alert(`Analyzing ${selected.id}`)} />
                <Button label="Dismiss" variant="secondary" onClick={() => setSelected(null)} />
              </div>
            </Card>
          </div>
        )}

      </div>
    </div>
  );
}
