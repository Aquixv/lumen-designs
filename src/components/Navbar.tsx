"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
import styles from './navbar.module.css';

const logoFont = Cinzel({ subsets: ['latin'], weight: '600' });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Closes the mobile menu automatically when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Left: Logo */}
        <Link href="/" className={`${styles.logo} ${logoFont.className}`} onClick={closeMenu}>
          Lumen Designs
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>

        {/* Center & Right: Grouped for Mobile Dropdown */}
        <div className={`${styles.menuContainer} ${isOpen ? styles.menuOpen : ''}`}>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.link} onClick={closeMenu}>Home</Link>
            <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
            <Link href="/studio" className={styles.link} onClick={closeMenu}>Studio</Link>
            <Link href="/projects" className={styles.link} onClick={closeMenu}>Projects</Link>
          </div>

          <div className={styles.ctaWrapper}>
            <Link href="/contact" className={styles.ctaButton} onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}