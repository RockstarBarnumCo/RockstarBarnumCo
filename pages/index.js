// /pages/index.js

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0A1437",
      color: "#FFD700",
      fontFamily: "sans-serif"
    }}>
      <img src="/rockstar-logo.png" alt="Rockstar Barnum & Co." style={{ width: 120, marginBottom: 32 }} />
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: 0 }}>
        Rockstar Barnum & Co.
      </h1>
      <h2 style={{ fontWeight: 400, margin: "18px 0 32px 0" }}>
        American Heritage. Global Innovation.<br/> Smart Preservation. AI-Powered Operations.
      </h2>
      <a
        href="mailto:admin@rockstarbarnum.com"
        style={{
          background: "#FFD700",
          color: "#0A1437",
          padding: "12px 32px",
          borderRadius: 10,
          fontWeight: 700,
          textDecoration: "none",
          marginTop: 16,
        }}
      >Contact Us</a>
      <footer style={{
        position: "absolute",
        bottom: 24,
        width: "100%",
        textAlign: "center",
        color: "#aaa"
      }}>
        © {new Date().getFullYear()} Rockstar Barnum & Co. | All rights reserved.
      </footer>
    </div>
  );
}
