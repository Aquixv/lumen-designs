import styles from "./studio.module.css";

export default function Studio() {
  const team = [
    { name: "Elena Rostova", role: "Principal Architect" },
    { name: "Marcus Chen", role: "Head of Interior Design" },
    { name: "Sarah Jenkins", role: "Landscape Architect" },
    { name: "David Ojo", role: "Structural Lead" },
  ];

  return (
    <main className={styles.studioMain}>
      <header className={styles.header}>
        <h1 className={styles.title}>The Studio</h1>
        <p className={styles.subtitle}>A multidisciplinary team of architects, designers, and engineers.</p>
      </header>

      {/* Team Grid */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Leadership</h2>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.name} className={styles.teamMember}>
              <div className={styles.avatarPlaceholder}></div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process List */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Our Process</h2>
        <div className={styles.processList}>
          <div className={styles.processItem}>
            <span>01</span>
            <div>
              <h3>Discovery & Brief</h3>
              <p>Analyzing site topography, environmental factors, and client intent.</p>
            </div>
          </div>
          <div className={styles.processItem}>
            <span>02</span>
            <div>
              <h3>Conceptual Design</h3>
              <p>Iterative spatial planning, material selection, and 3D modeling.</p>
            </div>
          </div>
          <div className={styles.processItem}>
            <span>03</span>
            <div>
              <h3>Execution</h3>
              <p>Rigorous project management and coordination with master builders.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}