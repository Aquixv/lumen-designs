import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import styles from "./portfolio.module.css";

export default function PortfolioIndex() {
  return (
    <main className={styles.portfolioMain}>
      <header className={styles.portfolioHeader}>
        <h1 className={styles.pageTitle}>Selected Works</h1>
        <p className={styles.pageSubtitle}>A curated collection of our recent residential and commercial commissions.</p>
      </header>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}