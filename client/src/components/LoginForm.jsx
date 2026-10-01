import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import GoogleLoginButton from "./GoogleLoginButton";

// ── Inline SVG Icons ──────────────────────────────────────────────────────────
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const SpinnerIcon = () => (
  <svg style={{ animation: "spin 0.8s linear infinite" }} width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// ── Google Icon ───────────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// ── Microsoft Icon ────────────────────────────────────────────────────────────
const MicrosoftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022"/>
    <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00"/>
    <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
  </svg>
);

// ── Botanical SVG Illustration ────────────────────────────────────────────────
const BotanicalIllustration = () => (
  <svg viewBox="0 0 520 680" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
    {/* Background layers - paper cut effect */}
    <rect width="520" height="680" fill="#f0f4f0" rx="0"/>

    {/* Layer 5 - lightest back */}
    <ellipse cx="340" cy="200" rx="220" ry="280" fill="#c8d8c0" opacity="0.5"/>
    {/* Layer 4 */}
    <ellipse cx="360" cy="280" rx="190" ry="260" fill="#a8c4a0" opacity="0.55"/>
    {/* Layer 3 */}
    <path d="M260 0 Q450 80 500 280 Q520 430 460 560 Q420 640 360 680 L520 680 L520 0 Z" fill="#7aaa72" opacity="0.6"/>
    {/* Layer 2 */}
    <path d="M300 0 Q490 100 520 320 Q530 480 480 620 L520 680 L520 0 Z" fill="#4d7c47" opacity="0.65"/>
    {/* Layer 1 - darkest front */}
    <path d="M370 0 Q510 60 520 180 L520 0 Z" fill="#2d5a27" opacity="0.9"/>

    {/* Wavy foreground shape */}
    <path d="M240 0 Q280 60 260 130 Q240 200 275 270 Q310 340 285 420 Q260 500 290 580 Q310 630 280 680 L520 680 L520 0 Z"
      fill="#2d5a27" opacity="0.85"/>

    {/* ── Tropical Leaves ── */}

    {/* Large palm leaf top-right */}
    <g transform="translate(410, 30) rotate(20)">
      <path d="M0 0 Q-15 40 -60 55 Q-40 30 0 0Z" fill="#1a3d18"/>
      <path d="M0 0 Q10 45 -20 70 Q-5 40 0 0Z" fill="#1a3d18"/>
      <path d="M0 0 Q30 38 20 75 Q10 45 0 0Z" fill="#243d22"/>
      <path d="M0 0 Q50 25 55 65 Q30 45 0 0Z" fill="#1a3d18"/>
      <path d="M0 0 Q60 5 75 40 Q45 30 0 0Z" fill="#243d22"/>
    </g>

    {/* Monstera leaf center */}
    <g transform="translate(350, 180) rotate(-15)">
      <ellipse cx="0" cy="0" rx="55" ry="80" fill="#2d5a27" opacity="0.9"/>
      <ellipse cx="-18" cy="-15" rx="12" ry="18" fill="#f0f4f0" opacity="0.7"/>
      <ellipse cx="18" cy="-10" rx="10" ry="16" fill="#f0f4f0" opacity="0.7"/>
      <ellipse cx="0" cy="30" rx="9" ry="14" fill="#f0f4f0" opacity="0.6"/>
      <line x1="0" y1="-80" x2="0" y2="80" stroke="#1a3d18" strokeWidth="2.5"/>
      <line x1="0" y1="-20" x2="-50" y2="20" stroke="#1a3d18" strokeWidth="1.5"/>
      <line x1="0" y1="10" x2="50" y2="40" stroke="#1a3d18" strokeWidth="1.5"/>
    </g>

    {/* Fern frond left-center */}
    <g transform="translate(290, 320) rotate(-30)">
      {[0,1,2,3,4,5,6,7].map(i => (
        <g key={i} transform={`translate(0, ${i * 18}) rotate(${i % 2 === 0 ? -40 : 40})`}>
          <ellipse cx="0" cy="0" rx="22" ry="8" fill="#3a6b34" opacity="0.85"/>
        </g>
      ))}
      <line x1="0" y1="-10" x2="0" y2="150" stroke="#2d5a27" strokeWidth="2"/>
    </g>

    {/* Large leaf bottom */}
    <g transform="translate(400, 480) rotate(10)">
      <path d="M0 0 Q-80 -40 -100 -120 Q-40 -60 0 0Z" fill="#1a3d18"/>
      <path d="M0 0 Q80 -50 90 -140 Q40 -65 0 0Z" fill="#243d22"/>
      <path d="M0 0 Q0 -80 0 -160" stroke="#1a3d18" strokeWidth="2.5" fill="none"/>
    </g>

    {/* Palm fronds right */}
    <g transform="translate(490, 350) rotate(5)">
      <path d="M0 0 Q-30 -80 -90 -100" stroke="#1a3d18" strokeWidth="3" fill="none"/>
      <path d="M0 0 Q-50 -65 -120 -60" stroke="#1a3d18" strokeWidth="3" fill="none"/>
      <path d="M0 0 Q-20 -90 -50 -130" stroke="#1a3d18" strokeWidth="2.5" fill="none"/>
      {[-130,-110,-90,-70,-50,-30].map((y,i) => (
        <g key={i} transform={`translate(${-20-i*10}, ${y})`}>
          <ellipse cx="0" cy="0" rx="16" ry="6" fill="#2d5a27" transform={`rotate(${-20+i*8})`}/>
        </g>
      ))}
    </g>

    {/* Small accent leaves scattered */}
    <g transform="translate(310, 80) rotate(-45)">
      <ellipse cx="0" cy="0" rx="8" ry="22" fill="#1a3d18" opacity="0.8"/>
    </g>
    <g transform="translate(460, 150) rotate(30)">
      <ellipse cx="0" cy="0" rx="6" ry="18" fill="#243d22" opacity="0.9"/>
    </g>
    <g transform="translate(340, 580) rotate(-20)">
      <ellipse cx="0" cy="0" rx="30" ry="10" fill="#1a3d18" opacity="0.75"/>
    </g>
    <g transform="translate(470, 580) rotate(15)">
      <path d="M0 0 Q-30 -50 -10 -100" stroke="#2d5a27" strokeWidth="2.5" fill="none"/>
      <ellipse cx="-10" cy="-100" rx="18" ry="7" fill="#1a3d18" transform="translate(-10,-100) rotate(-30)"/>
    </g>

    {/* Delicate grass blades bottom */}
    {[380, 410, 430, 455, 475, 500].map((x, i) => (
      <path key={i}
        d={`M${x} 680 Q${x + (i%2===0?-15:15)} ${620} ${x + (i%2===0?-8:8)} ${570}`}
        stroke="#1a3d18" strokeWidth={i%3===0?3:2} fill="none" opacity="0.8"/>
    ))}
  </svg>
);

// ── Validation ────────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Main Component ────────────────────────────────────────────────────────────
const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [fieldErr, setFieldErr] = useState({ email: "", password: "" });

  // Pre-fill remembered email
  useEffect(() => {
    const saved = localStorage.getItem("orbitly_email");
    if (saved) setEmail(saved);
  }, []);

  const validate = () => {
    const e = { email: "", password: "" };
    let ok = true;
    if (!email)                       { e.email    = "Email is required"; ok = false; }
    else if (!EMAIL_REGEX.test(email)){ e.email    = "Enter a valid email"; ok = false; }
    if (!password)                    { e.password = "Password is required"; ok = false; }
    else if (password.length < 6)    { e.password = "Min 6 characters"; ok = false; }
    setFieldErr(e);
    return ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      if (data.success) {
        localStorage.setItem("orbitly_token", data.token);
        localStorage.setItem("orbitly_user", JSON.stringify(data.user));
        localStorage.setItem("orbitly_email", email);
        setTimeout(() => navigate("/dashboard"), 600);
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      if (credentialResponse.credential) {
        // Base64Url decode JWT payload
        const base64Url = credentialResponse.credential.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        const profile = JSON.parse(jsonPayload);
        const user = {
          name: profile.name || "Google User",
          email: profile.email,
          picture: profile.picture,
        };

        localStorage.setItem("orbitly_token", credentialResponse.credential);
        localStorage.setItem("orbitly_user", JSON.stringify(user));
        localStorage.setItem("orbitly_email", user.email);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Google login decode error:", err);
      setError("Failed to process Google login response.");
    }
  };

  const handleGoogleError = () => {
    setError("Google Sign-In failed or was cancelled.");
  };

  return (
    <div style={styles.root}>
      {/* ── Card ── */}
      <div style={styles.card}>
        {/* ── Left: Form panel ── */}
        <div style={styles.formPanel}>
          <div style={styles.formInner}>
            <h1 style={styles.title}>Log in</h1>

            {error && (
              <div style={styles.errorBanner} role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={styles.form}>
              {/* Email */}
              <div style={styles.fieldGroup}>
                <label style={styles.label} htmlFor="email">
                  Login, email or phone number
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setFieldErr(p=>({...p,email:""})); }}
                  autoComplete="email"
                  disabled={loading}
                  style={{
                    ...styles.input,
                    ...(fieldErr.email ? styles.inputError : {}),
                  }}
                />
                {fieldErr.email && <span style={styles.fieldError}>{fieldErr.email}</span>}
              </div>

              {/* Password */}
              <div style={styles.fieldGroup}>
                <label style={styles.label} htmlFor="password">
                  Password
                </label>
                <div style={styles.inputWrap}>
                  <input
                    id="password"
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={e => { setPassword(e.target.value); setFieldErr(p=>({...p,password:""})); }}
                    autoComplete="current-password"
                    disabled={loading}
                    style={{
                      ...styles.input,
                      paddingRight: 44,
                      ...(fieldErr.password ? styles.inputError : {}),
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(v => !v)}
                    style={styles.eyeBtn}
                    tabIndex={-1}
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    {showPw ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {fieldErr.password && <span style={styles.fieldError}>{fieldErr.password}</span>}
              </div>

              {/* Submit */}
              <button
                id="login-submit"
                type="submit"
                disabled={loading}
                style={{
                  ...styles.submitBtn,
                  opacity: loading ? 0.75 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? (
                  <span style={styles.btnInner}>
                    <SpinnerIcon /> Logging in…
                  </span>
                ) : (
                  "Log in"
                )}
              </button>
            </form>

            {/* Divider */}
            <div style={styles.divider}>
              <span style={styles.dividerLine} />
              <span style={styles.dividerText}>or log in with</span>
              <span style={styles.dividerLine} />
            </div>

            {/* Google Sign In */}
            <div style={styles.googleContainer}>
              <GoogleLoginButton
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
              />
            </div>


            {/* Forgot */}
            <a
              href="#"
              style={styles.forgotLink}
              onClick={e => e.preventDefault()}
            >
              Forgot login or password?
            </a>
          </div>
        </div>

        {/* ── Right: Botanical illustration ── */}
        <div style={styles.illustrationPanel}>
          <BotanicalIllustration />
        </div>
      </div>
    </div>
  );
};

// ── Styles (plain JS objects — no Tailwind needed for this design) ─────────────
const GREEN = "#2d5a27";
const GREEN_DARK = "#1e3d1a";

const styles = {
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #e8f0e5 0%, #f5f8f4 50%, #dce8d8 100%)",
    padding: "24px",
    fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
  },
  card: {
    display: "flex",
    width: "100%",
    maxWidth: 820,
    minHeight: 520,
    borderRadius: 28,
    overflow: "hidden",
    boxShadow: "0 24px 80px rgba(45,90,39,0.18), 0 4px 20px rgba(45,90,39,0.08)",
    background: "#fff",
  },
  formPanel: {
    flex: "0 0 360px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 40px",
  },
  formInner: {
    width: "100%",
    maxWidth: 280,
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: 28,
    letterSpacing: "-0.3px",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 11.5,
    fontWeight: 500,
    color: "#555",
    letterSpacing: "0.01em",
  },
  inputWrap: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 10,
    border: "1.5px solid #e0e0e0",
    fontSize: 14,
    color: "#1a1a1a",
    background: "#fafafa",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  inputError: {
    borderColor: "#e53e3e",
  },
  eyeBtn: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#888",
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  fieldError: {
    fontSize: 11,
    color: "#e53e3e",
    marginTop: 2,
  },
  submitBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: 50,
    border: "none",
    background: GREEN,
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4,
    transition: "background 0.2s, transform 0.1s",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnInner: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "20px 0 16px",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    background: "#e5e5e5",
    display: "block",
  },
  dividerText: {
    fontSize: 12,
    color: "#999",
    whiteSpace: "nowrap",
  },
  googleContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
    width: "100%",
  },
  socialRow: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    marginBottom: 20,
  },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    border: "1.5px solid #e8e8e8",
    background: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  forgotLink: {
    display: "block",
    textAlign: "center",
    fontSize: 12.5,
    color: GREEN,
    textDecoration: "none",
    fontWeight: 500,
  },
  illustrationPanel: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
    minHeight: 400,
    display: window.innerWidth < 640 ? "none" : "block",
  },
  errorBanner: {
    background: "#fff5f5",
    border: "1px solid #fca5a5",
    color: "#dc2626",
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 13,
    marginBottom: 16,
  },
};

export default LoginForm;
