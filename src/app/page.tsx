"use client";

import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaPinterest, FaRegCopyright } from 'react-icons/fa';
import Link from 'next/link';
import { Suspense, useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
   const [year, setYear] = useState(2026);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
useEffect(() => {
    setYear(new Date().getFullYear());
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

        <div className={styles.heroContent}>
          <div className={styles.awardBadge}>
            Best Architecture Award 2024
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

      {/* SECTION 2*/}
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
      {/* Disciplines */}
      <section className={styles.disciplinesSection}>
        <h2 className={styles.disciplinesTitle}>Our Expertise</h2>
        
        <div className={styles.disciplinesGrid}>
          <div className={styles.disciplineItem}>
            <span className={styles.disciplineNumber}>01</span>
            <h3 className={styles.disciplineName}>Architecture</h3>
            <p className={styles.disciplineDesc}>
              Comprehensive spatial design focusing on structural integrity, natural light, and environmental context.
            </p>
          </div>

          <div className={styles.disciplineItem}>
            <span className={styles.disciplineNumber}>02</span>
            <h3 className={styles.disciplineName}>Interior Design</h3>
            <p className={styles.disciplineDesc}>
              Curated interior spaces with bespoke materiality that perfectly harmonize with the architectural shell.
            </p>
          </div>

          <div className={styles.disciplineItem}>
            <span className={styles.disciplineNumber}>03</span>
            <h3 className={styles.disciplineName}>Landscape</h3>
            <p className={styles.disciplineDesc}>
              Blurring the boundary between the built environment and the natural world through intentional exterior design.
            </p>
          </div>
        </div>
      </section>
      {/*Project Showcase */}
      <section className={styles.showcaseSection}>
        <div className={styles.showcaseHeader}>
          <h2 className={styles.showcaseTitle}>Selected Works</h2>
          <Link href="/projects" className={styles.viewAllLink}>
            View Full Portfolio <span></span>
          </Link>
        </div>
        
        <div className={styles.showcaseImageContainer}>
          <Image 
            src="https://images.unsplash.com/photo-1687120270050-de10bcc518e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" 
            alt="Featured Project: The Glass House"
            fill
            className={styles.showcaseImage}
          />
          <div className={styles.showcaseOverlay}>
            <h3>The Glass Pavilion</h3>
          </div>
        </div>
      </section>

      {/* SECTION 5: The Pre-Footer CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeadline}>Ready to realize your vision?</h2>
        <p className={styles.ctaSubtext}>Engage with our studio to begin the conversation.</p>
        <Link href="/contact" className={styles.ctaButtonLarge}>
          Start a Project
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h4 className= {styles.logo}>Lumen Designs</h4>
           <p className={styles.copyright}>
      <FaRegCopyright className={styles.icon} />
      <span>{year}, All Rights Reserved.</span>
    </p> 
          </div>
          <div className={styles.footerLinks}>
            <Link href="#"><FaLinkedin/></Link>
            <Link href="#"><FaTwitter/></Link>
            <Link href="#"><FaPinterest/></Link>
          </div>
        </div>
      </footer>
    </main>
  );
}