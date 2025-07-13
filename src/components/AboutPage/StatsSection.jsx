// components/about/StatsSection.jsx
import styles from './StatsSection.module.css';

export default function StatsSection() {
  const stats = [
    { value: "250+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Certified Experts" },
    { value: "15+", label: "Industries Served" }
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}