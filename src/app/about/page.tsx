import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.aboutMain}>
      <header className={styles.aboutHeader}>
        <h1 className={styles.title}>Our Philosophy</h1>
      </header>

      <section className={styles.splitLayout}>
        {/* Left: The Manifesto */}
        <div className={styles.manifesto}>
          <h2>
            We believe that architecture is the physical manifestation of human intent.
          </h2>
        </div>

        {/* Right: The Details */}
        <div className={styles.details}>
          <p>
            Founded on the principle of reductive design, Lumen Designs strips away the unnecessary to reveal the essential. We do not just build spaces; we sculpt light, manage acoustics, and curate the flow of human movement.
          </p>
          <p>
            Every material is chosen for its permanence and tactile quality. Whether it is raw concrete, sustainable timber, or expansive glass, our structures are designed to age gracefully and ground their inhabitants in the present moment.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <strong>15+</strong>
              <span>Years of Practice</span>
            </div>
            <div className={styles.statItem}>
              <strong>40+</strong>
              <span>Global Projects</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}