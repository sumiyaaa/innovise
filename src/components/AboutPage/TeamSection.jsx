// components/about/TeamSection.jsx
import styles from './TeamSection.module.css';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Hamid Lighari",
      role: "CEO & Founder",
      bio: "20+ years in IT transformation, ServiceNow certified master architect",
      color: "#00FF99"
    },
    {
      name: "Shahryar Qurashi",
      role: "CTO",
      bio: "Technology visionary with expertise in enterprise automation solutions",
      color: "#4D8AFF"
    },
    {
      name: "Yahyah Mirza",
      role: "Director of Solutions",
      bio: "Specializes in workflow optimization and digital transformation",
      color: "#FF6B6B"
    },
    {
      name: "Hamza Jilani",
      role: "Lead Developer",
      bio: "ServiceNow certified application developer with 12+ years experience",
      color: "#FFD166"
    }
  ];

  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Leadership Team</h2>
        <p className={styles.sectionSubtitle}>
          Our experienced leaders driving innovation and transformation
        </p>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={styles.teamCard}
              style={{ '--accent': member.color }}
            >
              <div className={styles.avatarPlaceholder}>
                <div className={styles.initials}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
              <div className={styles.contactButton}>Connect</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}