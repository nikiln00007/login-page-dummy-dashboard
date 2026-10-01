import { useState } from "react";

export default function SmartWallet({ onToast }) {
  const goals = [
    { label: "Travel", emoji: "📍" },
    { label: "Property", emoji: "🏠" },
    { label: "Education", emoji: "🎓" },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        border: "1px solid #e6e9e3",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        height: "100%",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#111417", margin: 0 }}>Smart Wallet</p>
          <p style={{ fontSize: 11, color: "#8a939c", margin: "2px 0 0" }}>Effortless saving goals.</p>
        </div>
        <button
          onClick={() => onToast("Add New Goal")}
          style={{
            padding: "5px 14px",
            borderRadius: 999,
            border: "none",
            background: "#9be02b",
            color: "#111417",
            fontWeight: 700,
            fontSize: 11,
            cursor: "pointer",
            whiteSpace: "nowrap",
            boxShadow: "0 2px 6px rgba(155,224,43,0.30)",
          }}
        >
          Add New +
        </button>
      </div>

      {/* Balance */}
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontSize: 30, fontWeight: 900, color: "#111417", letterSpacing: "-1px", lineHeight: 1 }}>
            19,820.00
          </span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#8a939c" }}>USD</span>
        </div>
        <p style={{ fontSize: 11, color: "#9aa2aa", margin: "3px 0 0" }}>Total Saving</p>
      </div>

      {/* Goal Chips */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: "auto" }}>
        {goals.map(({ label, emoji }) => (
          <div
            key={label}
            onClick={() => onToast(`${label} savings goal selected`)}
            style={{
              borderRadius: 14,
              border: "1px solid #e6e9e3",
              background: "#f8faf6",
              padding: "10px 6px",
              textAlign: "center",
              cursor: "pointer",
              transition: "border-color 0.15s",
            }}
          >
            <div style={{ fontSize: 16, marginBottom: 4 }}>{emoji}</div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#444a51" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
