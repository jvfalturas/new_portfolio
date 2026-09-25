import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
};

function ProjectCard({
  title,
  description,
  tech,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <img
        src={image}
        alt={`${title} preview`}
        className={styles.image}
      />

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>

        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
