// components/about/ContactSection.jsx
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Transform Your Business?</h2>
          <p className={styles.subtitle}>
            Let's discuss how our ServiceNow solutions can help you achieve your goals
          </p>
          <button className={styles.contactButton}>Contact Us Today</button>
        </div>
      </div>
    </section>
  );
}