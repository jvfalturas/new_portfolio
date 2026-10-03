import Skill from "./Skill";
import Reveal from "../../components/Reveal";
import styles from "./Skills.module.css";

function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Learning" },
    { name: "TypeScript", level: "Learning" },
    { name: "Git", level: "Intermediate" },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <Reveal>
          <p className={styles.label}>WHAT I WORK WITH</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2>Skills</h2>
        </Reveal>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <Reveal
              key={skill.name}
              delay={0.15 + index * 0.1}
              direction="up"
            >
              <Skill name={skill.name} level={skill.level} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;