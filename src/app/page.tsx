"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set up the watcher
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When 20% of the section is visible, trigger the animation
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop watching so it only animates once
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className={styles.darkHero}>
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Dark Architecture Hero"
          fill
          className={styles.darkHeroBg}
          priority
        />
        
        {/* The overlay content matching Inspi.png */}
        <div className={styles.heroContent}>
          <div className={styles.awardBadge}>
            Best Architecture Award - 2024
          </div>
          
          <h1 className={styles.darkHeadline}>
            Designing Spaces<br/>That Inspire
          </h1>
          
          <p className={styles.darkSubtext}>
            Creating innovative architectural solutions that blend functionality with aesthetic excellence
          </p>
          
          <div className={styles.buttonGroup}>
            <Link href="/projects" className={styles.btnPrimary}>Explore Projects</Link>
            <Link href="/contact" className={styles.btnSecondary}>Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Your Original Asymmetric Layout */}
      <section 
        ref={sectionRef} 
        className={`${styles.secondarySection} ${isVisible ? styles.inView : ''}`}
      >
        <div className={styles.textBlock}>
          <h2 className={styles.headline}>
            Shaping light, <br />
            space, and form.
          </h2>
          <p className={styles.subtext}>
            Lumen Designs is a boutique architectural studio specializing in minimal, 
            high-performance residential spaces.
          </p>
        </div>

        <div className={styles.imageGrid}>
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" 
            alt="Modern interior" 
            className={styles.mainImage} 
          />
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" 
            alt="Staircase detail" 
            className={styles.subImage} 
          />
          <img 
            src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" 
            alt="Exterior facade" 
            className={styles.subImage} 
          />
        </div>
      </section>
    </main>
  );
}