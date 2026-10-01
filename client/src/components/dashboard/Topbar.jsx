import { useState } from "react";

const NAV_LINKS = ["Dashboard", "Analytics", "Payments", "Cards", "Transaction"];

export default function Topbar({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px",
        background: "#f6f7f5",
        borderBottom: "1px solid #e6e9e3",
        flexShrink: 0,
        position: "relative",
        zIndex: 40,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: "#9be02b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(155,224,43,0.35)",
          }}
        >
          {/* Simple geometric icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#1a1f14" strokeWidth="2" />
            <path d="M8 12h8M12 8v8" stroke="#1a1f14" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span style={{ fontSize: 20, fontWeight: 800, color: "#111417", letterSpacing: "-0.5px" }}>
          Monetra
        </span>
      </div>

      {/* Center Pill Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          background: "#e9ebe6",
          borderRadius: 999,
          padding: "4px 5px",
          gap: 2,
        }}
      >
        {NAV_LINKS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              border: "none",
              background: activeTab === tab ? "#ffffff" : "transparent",
              color: activeTab === tab ? "#111417" : "#7a838c",
              fontWeight: activeTab === tab ? 700 : 500,
              fontSize: 13,
              cursor: "pointer",
              boxShadow: activeTab === tab ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
              transition: "all 0.15s",
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Right: Bell + Gear + Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Bell */}
        <button
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid #e2e6de",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#555d62",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* Gear */}
        <button
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid #e2e6de",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#555d62",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9z" />
          </svg>
        </button>

        {/* Avatar */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "2.5px solid #9be02b",
              background: "#1a1f14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#9be02b",
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            {user?.name?.[0]?.toUpperCase() || "U"}
          </button>

          {showMenu && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 44,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                border: "1px solid #e9ebe6",
                padding: 8,
                minWidth: 180,
                zIndex: 100,
              }}
            >
              <div style={{ padding: "8px 12px", borderBottom: "1px solid #f1f3ee", marginBottom: 4 }}>
                <p style={{ fontWeight: 700, fontSize: 12, color: "#111417" }}>{user?.name}</p>
                <p style={{ fontSize: 11, color: "#8a939c", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user?.email}</p>
              </div>
              <button
                onClick={onLogout}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: "#d94040",
                  fontSize: 12,
                  fontWeight: 600,
                  borderRadius: 10,
                  textAlign: "left",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
