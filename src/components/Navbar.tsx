import Link from 'next/link';
import styles from './navbar.module.css';
import { Cinzel } from 'next/font/google';

// const logoFont = Cinzel({ subsets: ['latin'], weight: '600' });

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Left: Logo */}
        <Link href="/" className={`${styles.logo}`}>
          Lumen Designs
        </Link>

        {/* Center: Navigation Links */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/studio" className={styles.link}>Studio</Link>
          <Link href="/projects" className={styles.link}>Projects</Link>
        </div>

        {/* Right: Call to Action */}
        {/* Right: Call to Action */}
<div className={styles.ctaWrapper}>
  <Link href="/contact" className={styles.ctaButton}>
    Get in Touch
  </Link>
</div>
      </nav>
    </header>
  );
}