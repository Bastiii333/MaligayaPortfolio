import "./Skills.css";
import Reveal from "../Reveal/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Front-end Development",
    tools: "HTML · CSS · JavaScript · Responsive UI",
  },
  {
    number: "02",
    title: "Backend Development",
    tools: "PHP · Node.js · Express · APIs",
  },
  {
    number: "03",
    title: "Databases",
    tools: "MySQL · MariaDB · SQL",
  },
  {
    number: "04",
    title: "CMS & Web Tools",
    tools: "WordPress · Elementor · Google Ads",
  },
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "PHP",
  "Node.js",
  "Express",
  "MySQL",
  "MariaDB",
  "WordPress",
  "Elementor",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section section-light">
      <div className="container">
        <Reveal as="div" className="section-heading">
          <p className="eyebrow">03 · Skills</p>
          <h2>
            Tools I use to turn ideas into <em>working products.</em>
          </h2>
        </Reveal>

        <div className="skills-layout">
          <Reveal as="div" className="skill-list">
            {skillGroups.map((skill) => (
              <div className="skill-row" key={skill.number}>
                <span>{skill.number}</span>
                <b>{skill.title}</b>
                <small>{skill.tools}</small>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" className="tech-cloud" delay={100}>
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
