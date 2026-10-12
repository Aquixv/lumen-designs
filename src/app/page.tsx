import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
        
        {/* Left Column: Text */}
        <div className={styles.textBlock}>
          <h1 className={styles.headline}>
            Shaping light, <br />
            space, and form.
          </h1>
          <p className={styles.subtext}>
            Lumen Designs is a boutique architectural studio specializing in minimal, 
            high-performance residential spaces.
          </p>
        </div>

        {/* Right Column: Asymmetric Image Grid */}
        <div className={styles.imageGrid}>
          {/* Use standard <img> tags with Unsplash URLs for rapid prototyping */}
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