import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Reveal from "../../components/Reveal";
import styles from "./Contact.module.css";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/jvfalturas",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/YOUR-HANDLE", // 👈 palisi
    icon: <FaLinkedin />,
  },
  {
    name: "Email",
    url: "mailto:flores.johnvincentcanedo@gmail.com",
    icon: <FaEnvelope />,
  },
];

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <Reveal>
          <p className={styles.label}>GET IN TOUCH</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className={styles.heading}>Let's Work Together</h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className={styles.description}>
            Have a project in mind or just want to say hello?
            Feel free to reach out.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href="mailto:flores.johnvincentcanedo@gmail.com"
            className={styles.primaryButton}
          >
            <FaEnvelope />
            Send Me an Email
          </a>
        </Reveal>

        <Reveal delay={0.4}>
          <div className={styles.divider}>
            <span>or connect with me</span>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
                aria-label={social.name}
              >
                <span className={styles.socialIcon}>{social.icon}</span>
                <span className={styles.socialName}>{social.name}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;