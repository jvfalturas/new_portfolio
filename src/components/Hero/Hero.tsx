import { useEffect, useState } from "react";
import Reveal from "../../components/Reveal";
import styles from "./Hero.module.css";

const WORDS = ["Vincent", "a Developer", "a Designer"]; // pwede ra ["Vincent"] kung isa ra

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    const typingSpeed = isDeleting ? 60 : 120;
    const pauseAtEnd = 1500;

    // Human na sa pag-type → pause, then start deleting
    if (!isDeleting && displayText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return () => clearTimeout(timeout);
    }

    // Human sa pag-delete → next word
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <Reveal>
      <section className={styles.hero}>
        <p className={styles.greeting}>Hello, I'm</p>

        <h1 className={styles.name}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </h1>

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
    </Reveal>
  );
}

export default Hero;