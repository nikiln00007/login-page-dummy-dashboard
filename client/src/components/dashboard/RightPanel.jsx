import { useState } from "react";

const CONTACTS = [
  { id: 1, name: "Alex", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=75&auto=format&fit=crop" },
  { id: 2, name: "Liam", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=75&auto=format&fit=crop" },
  { id: 3, name: "Sara", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=75&auto=format&fit=crop" },
  { id: 4, name: "Noah", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=75&auto=format&fit=crop" },
  { id: 5, name: "Emma", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=75&auto=format&fit=crop" },
  { id: 6, name: "James", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=75&auto=format&fit=crop" },
];

// ─── Quick Send ─────────────────────────────────────────────────────────────
function QuickSend({ onToast }) {
  const [selected, setSelected] = useState(1);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        border: "1px solid #e6e9e3",
        padding: "14px 16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      }}
    >
      <p style={{ fontWeight: 700, fontSize: 13, color: "#111417", margin: 0 }}>Quick send</p>
      <p style={{ fontSize: 10, color: "#8a939c", marginTop: 2, marginBottom: 10 }}>
        View your income in a certain period of time
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 7, overflowX: "auto", paddingBottom: 2 }}>
        {CONTACTS.map((c) => (
          <img
            key={c.id}
            src={c.src}
            alt={c.name}
            onClick={() => {
              setSelected(c.id);
              onToast(`Selected ${c.name} for transfer`);
            }}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              flexShrink: 0,
              border: selected === c.id ? "2.5px solid #9be02b" : "2px solid transparent",
              opacity: selected === c.id ? 1 : 0.8,
              transition: "border 0.15s, opacity 0.15s",
            }}
          />
        ))}
        <button
          onClick={() => onToast("Browse all contacts")}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "none",
            background: "#f1f4ee",
            color: "#555d62",
            cursor: "pointer",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}

// ─── VISA Card ────────────────────────────────────────────────────────────────
function VisaCard({ onToast }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        border: "1px solid #e6e9e3",
        padding: "12px 14px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Dark card */}
      <div
        style={{
          background: "linear-gradient(135deg, #131618 0%, #1e2520 100%)",
          borderRadius: 16,
          padding: "14px 16px",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          minHeight: 130,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            bottom: -24,
            right: -24,
            width: 100,
            height: 100,
            background: "radial-gradient(circle, rgba(155,224,43,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Top row: chip + visa */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
          <svg width="26" height="21" viewBox="0 0 26 21" fill="none">
            <rect x="0.5" y="0.5" width="25" height="20" rx="3" stroke="#d4af37" strokeWidth="1.2" fill="#f5d77f" fillOpacity="0.15" />
            <line x1="0.5" y1="7" x2="25.5" y2="7" stroke="#d4af37" strokeWidth="0.8" />
            <line x1="0.5" y1="14" x2="25.5" y2="14" stroke="#d4af37" strokeWidth="0.8" />
          </svg>
          <span style={{ fontSize: 15, fontWeight: 900, fontStyle: "italic", color: "#fff", letterSpacing: 1 }}>VISA</span>
        </div>

        {/* Card number */}
        <p style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.18em", color: "rgba(255,255,255,0.88)", margin: "8px 0", zIndex: 1 }}>
          **** **** 3892 7835
        </p>

        {/* Bottom row: name, valid, cvv */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", zIndex: 1 }}>
          <p style={{ fontWeight: 600, fontSize: 11, color: "rgba(255,255,255,0.90)", margin: 0 }}>
            Robart Esperanza
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 8, color: "rgba(255,255,255,0.45)", margin: 0 }}>Valid Thru</p>
              <p style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.88)", margin: 0 }}>18/90</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 8, color: "rgba(255,255,255,0.45)", margin: 0 }}>CVV</p>
              <p style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.88)", margin: 0 }}>235</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <button
          onClick={() => onToast("Deposit window opened")}
          style={{
            padding: "9px 0",
            borderRadius: 12,
            border: "none",
            background: "#9be02b",
            color: "#111417",
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(155,224,43,0.30)",
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => onToast("Transfer window opened")}
          style={{
            padding: "9px 0",
            borderRadius: 12,
            border: "1px solid #e2e6de",
            background: "#f5f7f3",
            color: "#111417",
            fontWeight: 700,
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          Transfer
        </button>
      </div>
    </div>
  );
}

// ─── Quick Action ─────────────────────────────────────────────────────────────
function QuickAction({ onToast }) {
  const actions = [
    { label: "Received", icon: "↓" },
    { label: "Request", icon: "↑" },
    { label: "More", icon: "⋮" },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        border: "1px solid #e6e9e3",
        padding: "14px 16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      }}
    >
      <p style={{ fontWeight: 700, fontSize: 12, color: "#111417", margin: "0 0 10px" }}>Quick Action</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {actions.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => onToast(`${label} action`)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "10px 6px",
              borderRadius: 14,
              border: "none",
              background: "#f8faf6",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            <span style={{ fontSize: 14, color: "#555d62" }}>{icon}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#555d62" }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Starter Plan ─────────────────────────────────────────────────────────────
function StarterPlan({ onToast }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        border: "1px solid #e6e9e3",
        padding: "16px 16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div>
        <p style={{ fontWeight: 800, fontSize: 16, color: "#111417", margin: 0 }}>Starter Plan</p>
        <p style={{ fontSize: 11, color: "#8a939c", marginTop: 4, lineHeight: 1.4 }}>
          Upgrade to the enterprise plan &amp; get attractive discounts
        </p>
      </div>
      <button
        onClick={() => onToast("Upgrading to Enterprise Plan...")}
        style={{
          width: "100%",
          padding: "11px 0",
          borderRadius: 999,
          border: "none",
          background: "#9be02b",
          color: "#111417",
          fontWeight: 800,
          fontSize: 13,
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(155,224,43,0.30)",
          letterSpacing: "0.1px",
        }}
      >
        Upgrade Plan
      </button>
    </div>
  );
}

// ─── Right Panel (composed) ────────────────────────────────────────────────────
export default function RightPanel({ onToast }) {
  return (
    <div
      style={{
        width: 280,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        overflowY: "auto",
      }}
    >
      <QuickSend onToast={onToast} />
      <VisaCard onToast={onToast} />
      <QuickAction onToast={onToast} />
      <StarterPlan onToast={onToast} />
    </div>
  );
}
