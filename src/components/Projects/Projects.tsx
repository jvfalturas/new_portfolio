import ProjectCard from "./ProjectCard";
import Reveal from "../../components/Reveal";
import styles from "./Projects.module.css";

const BASE = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with HTML, CSS and Native Javascript.",
    tech: ["HTML", "CSS", "Javascript"],
    image: `${BASE}/projects/portfolio.png`,
    githubUrl: "https://github.com/jvfalturas/portfolio.git",
    liveUrl: "https://jvfalturas.github.io/portfolio/",
  },
  {
    title: "RSVP Bookings & Reservations",
    description:
      "A website we created for our clients who wish to have their own fully customized RSVP online.",
    tech: ["HTML", "CSS", "Javascript"],
    image: `${BASE}/projects/rsvp.png`,
    githubUrl: "https://github.com/jvfalturas/Para-Siempre-Studio.git",
    liveUrl: "https://jvfalturas.github.io/Para-Siempre-Studio/",
  },
  {
    title: "Sample RSVP Website",
    description:
      "Here is our sample of fully responsive customized RSVP website.",
    tech: ["HTML", "CSS", "Javascript"],
    image: `${BASE}/projects/samplersvp.png`,
    githubUrl: "https://github.com/jvfalturas/melandjibo.git",
    liveUrl: "https://jvfalturas.github.io/melandjibo/",
  },
  {
    title: "Treasury Monitoring System",
    description:
      "A monitoring system intented for treasury department.",
    tech: ["CodeIgniter 3", "Angular Js", "CSS"],
    image: `${BASE}/projects/tms.png`,
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Grab Recon",
    description:
      "Grab Reconciliation Portal used to track and reconcile sales, revenues and variances.",
    tech: ["CodeIgniter 3", "Angular Js", "CSS"],
    image: `${BASE}/projects/grab.png`,
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Pay Parking",
    description:
      "Monitoring system mainly for stores pay parking services.",
    tech: ["CodeIgniter 3", "ReactJS", "CSS"],
    image: `${BASE}/projects/payparking.png`,
    githubUrl: "",
    liveUrl: "",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <Reveal>
          <p className={styles.label}>MY WORK</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2>Projects</h2>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={0.15 + index * 0.1}
              direction="up"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.image}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;