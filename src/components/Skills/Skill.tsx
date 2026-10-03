import { motion } from "framer-motion";
import styles from "./Skill.module.css";

type SkillProps = {
  name: string;
  level: "Advanced" | "Intermediate" | "Learning";
};

const levelPercent: Record<SkillProps["level"], number> = {
  Advanced: 90,
  Intermediate: 70,
  Learning: 45,
};

const levelColor: Record<SkillProps["level"], string> = {
  Advanced: "#34d399",     // green
  Intermediate: "#60a5fa", // blue
  Learning: "#fbbf24",     // yellow
};

function Skill({ name, level }: SkillProps) {
  const percent = levelPercent[level];
  const color = levelColor[level];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.level} style={{ color }}>
          {level}
        </span>
      </div>

      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        />
      </div>
    </div>
  );
}

export default Skill;