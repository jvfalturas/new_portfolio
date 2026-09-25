import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and TypeScript.",
    tech: ["React", "TypeScript", "CSS"],
    image: "/projects/portfolio.jpg",
    githubUrl: "https://github.com/jvfalturas/portfolio.git",
    liveUrl: "https://jvfalturas.github.io/portfolio/",
  },
  {
    title: "Task Manager",
    description:
      "A simple application for managing daily tasks.",
    tech: ["React", "TypeScript"],
    image: "/projects/task-manager.jpg",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager.com",
  },
  {
    title: "E-Commerce Website",
    description:
      "A responsive online store interface.",
    tech: ["React", "CSS"],
    image: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://ecommerce.com",
  },
];


function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <p className={styles.label}>MY WORK</p>

        <h2>Projects</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
