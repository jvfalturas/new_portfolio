import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <a href="#hero" className={styles.logo}>
          Vincent<span className={styles.logoAccent}> HUB</span>
        </a>

        <div className={styles.rightSide}>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className={
                    activeSection === item.id ? styles.active : ""
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <span className={styles.iconWrapper}>
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
            </button>

            <button
              className={styles.menuButton}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;