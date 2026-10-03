import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Skill.module.css";

type Level = "Advanced" | "Intermediate" | "Learning";

type SkillProps = {
  name: string;
  level: Level;
};

const levelPercent: Record<Level, number> = {
  Advanced: 90,
  Intermediate: 70,
  Learning: 45,
};

const techMeta: Record<string, { icon: string; color: string }> = {
  html:                     { icon: "/icons/html.png",         color: "#e34f26" },
  css:                      { icon: "/icons/css.svg",          color: "#1572b6" },
  javascript:               { icon: "/icons/javascript.svg",   color: "#f7df1e" },
  "javascript (vanilla)":   { icon: "/icons/js.svg",   color: "#f7df1e" },
  react:                    { icon: "/icons/reactjs.png",        color: "#61dafb" },
  typescript:               { icon: "/icons/ts.svg",   color: "#3178c6" },
  git:                      { icon: "/icons/git.png",          color: "#f05032" },
  "codeigniter 3":          { icon: "/icons/ci.png",  color: "#ee4623" },
  "angular js":             { icon: "/icons/angularjs.png",    color: "#dd0031" },
};

const fallbackColor = "#60a5fa";

function Skill({ name, level }: SkillProps) {
  const percent = levelPercent[level];
  const meta = techMeta[name.toLowerCase()] ?? { icon: "", color: fallbackColor };
  const color = meta.color;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  // Animated counter
  useEffect(() => {
    if (!inView) return;
    const duration = 1000;
    const steps = 30;
    const increment = percent / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= percent) {
        setCount(percent);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, percent]);

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div
            className={styles.iconWrapper}
            style={{ color }}
          >
            {meta.icon ? (
              <img src={meta.icon} alt={name} className={styles.icon} />
            ) : (
              <span className={styles.dot} style={{ background: color }} />
            )}
          </div>

          <span className={styles.name}>{name}</span>
        </div>

        <span className={styles.percent} style={{ color }}>
          {count}%
        </span>
      </div>

      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          style={{ background: color, color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        />
      </div>

      <span className={styles.badge} data-level={level}>
        {level}
      </span>
    </div>
  );
}

export default Skill;