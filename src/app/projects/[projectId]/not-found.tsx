import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main style={{ padding: "12rem 2rem", textAlign: "center", minHeight: "80vh" }}>
      <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "4rem", marginBottom: "1rem" }}>
        Project ID Not Found
      </h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", fontSize: "1.1rem" }}>
        The architecture you are looking for does not exist in our current archive.
      </p>
      <Link 
        href="/projects" 
        style={{ color: "var(--color-accent-gold)", textDecoration: "none", fontWeight: 600 }}
      >
        Return to Portfolio
      </Link>
    </main>
  );
}