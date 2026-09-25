import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.label}>GET IN TOUCH</p>

        <h2>Let's Work Together</h2>

        <p>
          Have a project in mind or just want to say hello?
          Feel free to reach out.
        </p>

        <a
          href="mailto:flores.johnvincentcanedo@gmail.com"
          className={styles.button}
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
