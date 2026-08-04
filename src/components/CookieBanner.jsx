import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_NOTICE_KEY = "cookie_notice_acknowledged_v1";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(localStorage.getItem(STORAGE_NOTICE_KEY) !== "true");

    function openNotice() {
      setShowBanner(true);
    }

    window.addEventListener("abm:open-storage-notice", openNotice);
    return () => window.removeEventListener("abm:open-storage-notice", openNotice);
  }, []);

  function acknowledgeNotice() {
    localStorage.setItem(STORAGE_NOTICE_KEY, "true");
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div style={styles.overlay} role="region" aria-labelledby="storage-notice-title">
      <div style={styles.banner}>
        <div style={styles.copy}>
          <h2 id="storage-notice-title" style={styles.title}>Privacy-friendly by default</h2>
          <p style={styles.text}>
            This site currently uses only essential browser storage and security
            technology. It does not deploy analytics cookies or advertising
            pixels. Read our <Link to="/legal/cookies" style={styles.inlineLink}>Cookie Notice</Link> or <Link to="/legal/privacy" style={styles.inlineLink}>Website Privacy Notice</Link>.
          </p>
        </div>
        <button type="button" style={styles.primaryButton} onClick={acknowledgeNotice}>
          Got it
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: "auto 0 0 0",
    zIndex: 9999,
    padding: "16px",
    background: "rgba(7, 17, 31, 0.58)",
    backdropFilter: "blur(6px)",
  },
  banner: {
    maxWidth: "1120px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 24px 70px rgba(0, 0, 0, 0.28)",
    color: "#16243E",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },
  copy: {
    flex: "1 1 620px",
  },
  title: {
    margin: "0 0 6px",
    fontSize: "19px",
    fontWeight: "800",
  },
  text: {
    margin: 0,
    lineHeight: "1.6",
    fontSize: "14px",
    color: "#475569",
  },
  inlineLink: {
    color: "#1F5F60",
    fontWeight: "700",
    textDecoration: "underline",
  },
  primaryButton: {
    border: 0,
    borderRadius: "999px",
    padding: "11px 22px",
    background: "#2C7A7B",
    color: "#ffffff",
    fontWeight: "800",
    cursor: "pointer",
    flexShrink: 0,
  },
};
