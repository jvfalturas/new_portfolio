import Skill from "./Skill";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <p className={styles.label}>WHAT I WORK WITH</p>

        <h2>Skills</h2>

        <div className={styles.grid}>
          <Skill name="HTML" level="Advanced" />
          <Skill name="CSS" level="Advanced" />
          <Skill name="JavaScript" level="Intermediate" />
          <Skill name="React" level="Learning" />
          <Skill name="TypeScript" level="Learning" />
          <Skill name="Git" level="Intermediate" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
