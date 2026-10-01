import { useState } from "react";

const MONTHS = [
  { month: "Jan", h: 38 },
  { month: "Feb", h: 50 },
  { month: "Mar", h: 65 },
  { month: "Apr", h: 42 },
  { month: "May", h: 57 },
  { month: "Jun", h: 74 },
  { month: "Jul", h: 85 },
  { month: "Aug", h: 100, highlight: true, label: "$8,689.20" },
  { month: "Sep", h: 70 },
  { month: "Oct", h: 60 },
  { month: "Nov", h: 52 },
  { month: "Dec", h: 40 },
];

const FILTERS = ["Income", "Expense", "Savings"];

export default function CashFlow() {
  const [filter, setFilter] = useState("Income");
  const [hovered, setHovered] = useState("Aug");

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        border: "1px solid #e6e9e3",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        padding: "18px 20px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        flex: 1,
        minHeight: 0,
      }}
    >
      {/* Top Row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontSize: 12, color: "#8a939c", margin: 0, fontWeight: 500 }}>Cash Flow</p>
          <p style={{ fontSize: 22, fontWeight: 900, color: "#111417", margin: "2px 0 0", letterSpacing: "-0.8px" }}>
            $342,323.44
          </p>
          {/* Filter Tabs */}
          <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 700,
                  color: filter === f ? "#111417" : "#a0a8b0",
                  padding: 0,
                  borderBottom: filter === f ? "2px solid #9be02b" : "2px solid transparent",
                  paddingBottom: 2,
                  transition: "color 0.15s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Timeframe Selector */}
        <select
          style={{
            background: "#f4f6f2",
            border: "1px solid #e2e6de",
            borderRadius: 999,
            padding: "5px 12px",
            fontSize: 12,
            fontWeight: 600,
            color: "#111417",
            cursor: "pointer",
            outline: "none",
            appearance: "none",
            paddingRight: 20,
          }}
        >
          <option>Yearly ⌄</option>
          <option>Monthly ⌄</option>
          <option>Weekly ⌄</option>
        </select>
      </div>

      {/* Chart Area */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          gap: 16,
          alignItems: "stretch",
        }}
      >
        {/* Y-Axis Labels */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: 20,
            flexShrink: 0,
            width: 28,
          }}
        >
          {["35k", "20k", "15k", "10k", "5k", "0k"].map((label) => (
            <span key={label} style={{ fontSize: 9, color: "#b0b8c0", fontWeight: 500 }}>
              {label}
            </span>
          ))}
        </div>

        {/* Bars */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            gap: 6,
            paddingBottom: 0,
          }}
        >
          {MONTHS.map((item) => {
            const isActive = item.highlight || hovered === item.month;
            return (
              <div
                key={item.month}
                onMouseEnter={() => setHovered(item.month)}
                onMouseLeave={() => setHovered("Aug")}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  gap: 4,
                  height: "100%",
                }}
              >
                {/* Tooltip */}
                {isActive && (
                  <div
                    style={{
                      background: "#111417",
                      color: "#fff",
                      fontSize: 9,
                      fontWeight: 700,
                      padding: "3px 7px",
                      borderRadius: 6,
                      whiteSpace: "nowrap",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                      marginBottom: 2,
                    }}
                  >
                    {item.label || `$${((item.h / 100) * 34.5).toFixed(1)}k`}
                  </div>
                )}

                {/* Bar */}
                <div
                  style={{
                    width: "100%",
                    maxWidth: 32,
                    borderRadius: "6px 6px 0 0",
                    background: item.highlight
                      ? "#9be02b"
                      : isActive
                      ? "#d0d8cc"
                      : "#eaeee8",
                    height: `${item.h}%`,
                    transition: "background 0.15s, height 0.2s",
                    boxShadow: item.highlight ? "0 4px 12px rgba(155,224,43,0.35)" : "none",
                  }}
                />

                {/* Month label */}
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: item.highlight ? 800 : 500,
                    color: item.highlight ? "#111417" : "#9aa2aa",
                    marginTop: 4,
                  }}
                >
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
