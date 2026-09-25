import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>Hello, I'm</p>

      <h1>Vincent</h1>

      <h2>Full-Stack Web Developer</h2>

      <p className={styles.description}>
        I build modern, responsive, and user-friendly web
        applications using modern web technologies.
      </p>

      <div className={styles.actions}>
        <a href="#projects" className={styles.primaryButton}>
          View My Projects
        </a>

        <a href="#contact" className={styles.secondaryButton}>
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
