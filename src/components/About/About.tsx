import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "../../components/Reveal";
import styles from "./About.module.css";

const BASE = import.meta.env.BASE_URL;

const stats = [
  { value: 2, suffix: "+", label: "Years Coding" },
  { value: 6, suffix: "+", label: "Projects Built" },
  { value: 8, suffix: "+", label: "Technologies" },
];

type StatItemProps = {
  value: number;
  suffix: string;
  label: string;
};

function StatItem({ value, suffix, label }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.statValue}>
        {count}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT — Photo */}
          <Reveal direction="left">
            <div className={styles.imageWrapper}>
              <img
                src={`${BASE}my_logo.png`}
                alt="Vincent Falturas"
                className={styles.image}
              />
              <div className={styles.imageGlow} />
            </div>
          </Reveal>

          {/* RIGHT — Content */}
          <div className={styles.content}>
            <Reveal>
              <p className={styles.label}>GET TO KNOW ME</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className={styles.heading}>About Me</h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className={styles.description}>
                I'm <span className={styles.highlight}>Vincent</span>, a
                web developer passionate about creating modern and
                responsive websites and web applications.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className={styles.description}>
                I enjoy turning ideas into functional digital
                experiences and continuously improving my skills
                through real-world projects.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.4}>
              <div className={styles.stats}>
                {stats.map((stat) => (
                  <StatItem
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.5}>
              <div className={styles.actions}>
                <a
                  href={`${BASE}resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Download CV
                </a>
                <a href="#contact" className={styles.secondaryButton}>
                  Let's Talk
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;