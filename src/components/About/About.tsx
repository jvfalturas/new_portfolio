import Reveal from "../../components/Reveal";
import styles from "./About.module.css";

const BASE = import.meta.env.BASE_URL;

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "6+", label: "Projects Built" },
  { value: "8+", label: "Technologies" },
];

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
                  <div key={stat.label} className={styles.stat}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
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