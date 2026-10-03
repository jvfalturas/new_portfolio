import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

// 🎨 Color map per tech
const techColors: Record<string, string> = {
  html: "orange",
  css: "blue",
  javascript: "yellow",
  typescript: "blue",
  react: "cyan",
  "reactjs": "cyan",
  "angular js": "red",
  "angularjs": "red",
  "codeigniter 3": "orange",
  git: "red",
  default: "gray",
};

function getTechColor(tech: string) {
  return techColors[tech.toLowerCase()] ?? techColors.default;
}

function ProjectCard({
  title,
  description,
  tech,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const hasLinks = Boolean(githubUrl || liveUrl);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={`${title} preview`}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>

        <div className={styles.techList}>
          {tech.map((item) => (
            <span
              key={item}
              className={`${styles.techTag} ${styles[getTechColor(item)]}`}
            >
              {item}
            </span>
          ))}
        </div>

        {hasLinks ? (
          <div className={styles.links}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.githubLink}
              >
                GitHub
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.liveLink}
              >
                Live Demo
              </a>
            )}
          </div>
        ) : (
          <span className={styles.privateBadge}>Private Project</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;