// components/about/ValuesSection.jsx
import styles from './ValuesSection.module.css';

export default function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge ServiceNow solutions",
      color: "#00FF99"
    },
    {
      title: "Excellence",
      description: "Quality is at the core of everything we do",
      color: "#4D8AFF"
    },
    {
      title: "Integrity",
      description: "We build trust through transparency and ethical practices",
      color: "#FF6B6B"
    },
    {
      title: "Collaboration",
      description: "Great solutions come from teamwork and shared vision",
      color: "#FFD166"
    },
    {
      title: "Customer Focus",
      description: "Your success is our ultimate measure of achievement",
      color: "#A663CC"
    },
    {
      title: "Agility",
      description: "We adapt quickly to meet evolving business needs",
      color: "#06D6A0"
    }
  ];

  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <p className={styles.sectionSubtitle}>
          The principles that guide our work and relationships
        </p>
        
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div 
              key={index} 
              className={styles.valueCard}
              style={{ '--accent': value.color }}
            >
              <div className={styles.valueNumber}>{index + 1}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}