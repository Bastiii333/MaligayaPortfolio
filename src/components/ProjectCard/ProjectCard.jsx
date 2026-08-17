import "./ProjectCard.css";

import ProjectPreview from "../ProjectPreview/ProjectPreview";

export default function ProjectCard({
  number,
  type,
  title,
  description,
  tags,
  preview,
  liveUrl = "#",
  githubUrl = "#",
  featured = false,
  onSelect,
}) {
  return (
    <article
      className={`project-card ${featured ? "project-featured" : ""}`}
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect?.();
        }
      }}
      aria-label={`Open project preview for ${title}`}
    >
      <div className={`project-preview preview-${preview}`}>
        <ProjectPreview type={preview} />
        <span className="preview-label">
          {number} / {type.split(" · ")[0]}
        </span>
      </div>

      <div className="project-content">
        <div className="project-number">{number}</div>

        <div>
          <p className="project-type">{type}</p>
          <h3>{title}</h3>
          <p className="project-description">{description}</p>

          <div className="tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-links">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              Live preview <span>↗</span>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              Source code <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
