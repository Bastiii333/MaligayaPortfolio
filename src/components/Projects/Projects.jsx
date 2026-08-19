import "./Projects.css";
import { useState } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectMediaModal from "../ProjectMediaModal/ProjectMediaModal";
import UnavailablePreviewModal from "../UnavailablePreviewModal/UnavailablePreviewModal";
import Reveal from "../Reveal/Reveal";


export default function Projects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [unavailableProject, setUnavailableProject] = useState(null);



  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal as="div" className="section-heading section-heading-wide">
          <div>
            <p className="eyebrow">02 · Selected work</p>
            <h2>
              Projects that show what I can <em>build.</em>
            </h2>
          </div>

          <p className="section-intro">
            A selection of web, dashboard, CRM, and backend work.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              as="div"
              key={project.id}
              delay={index * 80}
              className={project.featured ? "project-featured" : ""}
            >
              <ProjectCard
                {...project}
                onSelect={() => setSelectedProject(project)}
                onLivePreviewUnavailable={() => setUnavailableProject(project)}
              />
            </Reveal>
          ))}
        </div>

        <ProjectMediaModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
        <UnavailablePreviewModal
          project={unavailableProject}
          onClose={() => setUnavailableProject(null)}
        />
      </div>
    </section>
  );
}
