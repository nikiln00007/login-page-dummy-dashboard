// Orbitly SVG Logo — orbit icon + wordmark
const OrbitlyLogo = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer orbit ring */}
    <ellipse
      cx="20"
      cy="20"
      rx="18"
      ry="9"
      stroke="#22D3EE"
      strokeWidth="1.8"
      fill="none"
      strokeDasharray="4 2"
      style={{
        transformOrigin: "20px 20px",
        animation: "orbit 6s linear infinite",
      }}
    />
    {/* Inner orbit ring (tilted) */}
    <ellipse
      cx="20"
      cy="20"
      rx="12"
      ry="18"
      stroke="#4F46E5"
      strokeWidth="1.8"
      fill="none"
      strokeOpacity="0.6"
    />
    {/* Center planet */}
    <circle cx="20" cy="20" r="5" fill="#4F46E5" />
    <circle cx="20" cy="20" r="3" fill="#6366f1" />
    {/* Orbiting dot */}
    <circle cx="38" cy="20" r="2.5" fill="#22D3EE" />
  </svg>
);

export default OrbitlyLogo;
