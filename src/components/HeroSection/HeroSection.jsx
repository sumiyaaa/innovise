// HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
// import hero from '../../../public/images/hero.png'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.innerContainer}>
        <div className={styles.textContent}>
          <p>
            At Innovise, we deliver modern IT solutions using ServiceNow to help businesses streamline
            workflows, automate operations, and grow smarter.
          </p>
          <h2>
            Empowering Businesses <br />
            with <span>Intelligent ServiceNow Solutions</span>
          </h2>
          <button>Get Started</button>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.circle} />
          {/* <Image src="hero.png" alt="AI Expert" className={styles.image} priority /> */}
         
        </div>
      </div>
    </section>
  );
}