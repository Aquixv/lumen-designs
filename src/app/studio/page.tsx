import styles from "./studio.module.css";
import Image from "next/image";
export default function Studio() {
  const team = [
    { name: "Elena Rostova", role: "Principal Architect", image:"https://images.unsplash.com/photo-1706272971886-20f2fadf577e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { name: "Marcus Chen", role: "Head of Interior Design", image:"https://images.unsplash.com/photo-1774821171205-4e4b5352666d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { name: "Sarah Jenkins", role: "Landscape Architect", image:"https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    { name: "David Ojo", role: "Structural Lead", image:"https://images.unsplash.com/photo-1616805765352-beedbad46b2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
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
              {/* The new constrained image wrapper */}
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className={styles.memberImage}
                  unoptimized // Keeps your local server from timing out on external images
                />
              </div>
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