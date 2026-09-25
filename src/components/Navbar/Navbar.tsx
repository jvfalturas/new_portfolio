import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Vincent Hub</div>

      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <ul
        className={`${styles.navLinks} ${
          isOpen ? styles.open : ""
        }`}
      >
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
