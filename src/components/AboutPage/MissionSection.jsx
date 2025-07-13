// components/about/MissionSection.jsx
import styles from './MissionSection.module.css';

export default function MissionSection() {
  return (
    <section className={styles.mission}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionStatement}>
            To empower businesses with intelligent ServiceNow solutions that streamline workflows, 
            automate operations, and enable smarter growth.
          </p>
          <div className={styles.goals}>
            <div className={styles.goalCard}>
              <div className={styles.icon}>✓</div>
              <h3>Innovate</h3>
              <p>Pioneering new approaches to digital transformation</p>
            </div>
            <div className={styles.goalCard}>
              <div className={styles.icon}>✓</div>
              <h3>Transform</h3>
              <p>Turning complex challenges into streamlined solutions</p>
            </div>
            <div className={styles.goalCard}>
              <div className={styles.icon}>✓</div>
              <h3>Empower</h3>
              <p>Enabling businesses to achieve their full potential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}