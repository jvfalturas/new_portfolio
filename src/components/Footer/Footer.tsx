import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Vincent Hub. All rights reserved.</p>

      <div className={styles.links}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.upwork.com/freelancers/~01e70550b7268885a7?mp_source=share"
          target="_blank"
          rel="noreferrer"
        >
          Upwork
        </a>
      </div>
    </footer>
  );
}

export default Footer;
