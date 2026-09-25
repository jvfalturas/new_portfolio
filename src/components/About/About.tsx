import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.label}>GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p>
          I'm Vincent, a web developer passionate about creating
          modern and responsive websites and web applications.
        </p>

        <p>
          I enjoy turning ideas into functional digital
          experiences and continuously improving my skills
          through real-world projects.
        </p>
      </div>
    </section>
  );
}

export default About;
