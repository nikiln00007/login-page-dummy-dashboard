const STAT_CARDS = [
  {
    id: "balance",
    label: "Current Balance",
    emoji: "💼",
    emojiColor: "#2563eb",
    emojiBg: "#eff6ff",
    value: "$7,000.75",
    change: "+34.5%",
    isPositive: true,
  },
  {
    id: "savings",
    label: "Savings",
    emoji: "🛡️",
    emojiColor: "#7c3aed",
    emojiBg: "#f5f3ff",
    value: "$5,300.50",
    change: "+12.01%",
    isPositive: true,
  },
  {
    id: "income",
    label: "Income",
    emoji: "🪙",
    emojiColor: "#d97706",
    emojiBg: "#fffbeb",
    value: "$28,750.75",
    change: "+7.76%",
    isPositive: true,
  },
  {
    id: "expenses",
    label: "Expenses",
    emoji: "🛑",
    emojiColor: "#dc2626",
    emojiBg: "#fef2f2",
    value: "$21,450.00",
    change: "-8.12%",
    isPositive: false,
  },
];

export default function StatCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 10,
        height: "100%",
      }}
    >
      {STAT_CARDS.map((card) => (
        <div
          key={card.id}
          style={{
            background: "#ffffff",
            borderRadius: 18,
            border: "1px solid #e6e9e3",
            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          {/* Card header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 8,
                  background: card.emojiBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                }}
              >
                {card.emoji}
              </div>
              <span style={{ fontSize: 11, fontWeight: 500, color: "#636b73" }}>{card.label}</span>
            </div>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#aab2bb",
                fontSize: 14,
                lineHeight: 1,
              }}
            >
              •••
            </button>
          </div>

          {/* Value + badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 17, fontWeight: 800, color: "#111417", letterSpacing: "-0.5px" }}>
              {card.value}
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                padding: "3px 7px",
                borderRadius: 999,
                background: card.isPositive ? "#f0fdf4" : "#fef2f2",
                color: card.isPositive ? "#16a34a" : "#dc2626",
              }}
            >
              {card.change} {card.isPositive ? "↗" : "↘"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
