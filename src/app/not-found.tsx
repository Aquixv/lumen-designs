import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <main style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "70vh", 
      textAlign: "center",
      padding: "2rem" 
    }}>
      <h1 style={{ 
        fontFamily: "var(--font-playfair), serif", 
        fontSize: "6rem", 
        color: "var(--color-text-main)",
        marginBottom: "1rem",
        lineHeight: 1
      }}>
        404
      </h1>
      <p style={{ 
        color: "var(--color-text-muted)", 
        fontSize: "1.125rem", 
        marginBottom: "3rem" 
      }}>
        The page you're looking for doesn't exist, yet
      </p>
      <Link 
        href="/" 
        style={{
          backgroundColor: "var(--color-accent-gold)",
          color: "white",
          padding: "1rem 2.5rem",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: 600,
          transition: "background-color 0.2s ease"
        }}
      >
        Return to Home
      </Link>
    </main>
  );
}