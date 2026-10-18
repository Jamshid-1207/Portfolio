const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Zustand",
  "Tailwind CSS",
  "React Hook Form",
  "Vite",
  "Git",
];

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>

      <p>
        Hi! I'm Jamshidbek Samandarov, a frontend developer from Tashkent,
        Uzbekistan. I build web applications with React, Next.js and TypeScript
        — from landing pages with calculators and validated forms to online
        stores with search, filters and a cart.
      </p>

      <p>
        In my recent projects I use Feature-Sliced Design to keep the code easy
        to grow, and Zustand for state management.
      </p>

      <h3>Tech stack</h3>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
