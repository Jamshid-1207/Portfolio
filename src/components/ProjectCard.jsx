export default function ProjectCard({ title, desc, stack, img, code, demo }) {
  return (
    <div className="project-card">
      {img ? (
        <img src={img} alt={title} />
      ) : (
        <div className="project-card__cover">{title}</div>
      )}

      <h3>{title}</h3>
      <p>{desc}</p>
      {stack && <p className="project-card__stack">{stack}</p>}

      <div className="project-card__links">
        <a href={code} className="link" target="_blank" rel="noreferrer">
          Code
        </a>
        {demo && (
          <a
            href={demo}
            className="link link--outline"
            target="_blank"
            rel="noreferrer">
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}
