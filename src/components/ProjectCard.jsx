import projects from "../data/projects";

export default function ProjectCard({ title, desc, img, link }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} className="link" target="_blank">
        View Project
      </a>
    </div>
  );
}
