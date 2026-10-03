import Reveal from "../../components/Reveal";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.label}>GET TO KNOW ME</p>

        <Reveal><h2>About Me</h2></Reveal>

        <Reveal delay={0.15}>
          <p>
            I'm Vincent, a web developer passionate about creating
            modern and responsive websites and web applications.
          </p>
        </Reveal>

        <Reveal delay={0.3} direction="left">
          <p>
            I enjoy turning ideas into functional digital
            experiences and continuously improving my skills
            through real-world projects.
          </p>
        </Reveal>
        
      </div>
    </section>
  );
}

export default About;
