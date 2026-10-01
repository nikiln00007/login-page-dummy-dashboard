import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/dashboard/Topbar";
import Sidebar from "../components/dashboard/Sidebar";
import SmartWallet from "../components/dashboard/SmartWallet";
import StatCards from "../components/dashboard/StatCards";
import CashFlow from "../components/dashboard/CashFlow";
import RightPanel from "../components/dashboard/RightPanel";

export default function Dashboard() {
  const navigate = useNavigate();

  // Restore user from session
  const stored = JSON.parse(localStorage.getItem("orbitly_user") || "null");
  const [user, setUser] = useState(stored || { name: "Robart", email: "robart@monetra.io" });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("orbitly_token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("orbitly_token");
    localStorage.removeItem("orbitly_user");
    localStorage.removeItem("orbitly_email");
    navigate("/login");
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#f0f2ee",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── TOP BAR ── */}
      <Topbar user={user} onLogout={handleLogout} />

      {/* ── MAIN BODY (Sidebar + Content) ── */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          gap: 10,
          padding: 12,
          overflow: "hidden",
        }}
      >
        {/* ── LEFT: SIDEBAR ── */}
        <Sidebar onLogout={handleLogout} />

        {/* ── CENTER: CONTENT ── */}
        <main
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            overflow: "hidden",
          }}
        >
          {/* Greeting */}
          <div style={{ flexShrink: 0 }}>
            <h1
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: "#111417",
                margin: 0,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              Hi, {user.name} 👋
            </h1>
            <p style={{ fontSize: 12, color: "#8a939c", margin: "3px 0 0" }}>
              Welcome back! Here's your financial snapshot.
            </p>
          </div>

          {/* Top Row: Smart Wallet + Stat Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 1fr",
              gap: 10,
              flex: "0 0 180px",
            }}
          >
            <SmartWallet onToast={showToast} />
            <StatCards />
          </div>

          {/* Bottom Row: Cash Flow Chart */}
          <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
            <CashFlow />
          </div>
        </main>

        {/* ── RIGHT: PANEL ── */}
        <RightPanel onToast={showToast} />
      </div>

      {/* ── TOAST ── */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#111417",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 600,
            boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
            zIndex: 9999,
            letterSpacing: "0.15px",
            whiteSpace: "nowrap",
            animation: "fadeIn 0.18s ease",
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}
