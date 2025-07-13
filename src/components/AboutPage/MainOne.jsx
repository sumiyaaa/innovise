// components/about/AboutHero.jsx
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            About Innovise
          </h2>
          <p className={styles.subtitle}>
            We're transforming businesses with intelligent ServiceNow solutions
          </p>
          <div className={styles.description}>
            <p>
              Founded in 2015, Innovise has been at the forefront of digital transformation, 
              helping enterprises streamline operations and accelerate growth through our 
              ServiceNow expertise.
            </p>
            <p>
              Our team of certified experts combines technical excellence with business 
              acumen to deliver solutions that drive real results.
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.gridOverlay}></div>
          <div className={styles.globeAnimation}></div>
        </div>
      </div>
    </section>
  );
}