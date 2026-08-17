import "./About.css";
import Reveal from "../Reveal/Reveal";

export default function About() {
  return (
    <section id="about" className="section section-light">
      <div className="container about-grid">
        <Reveal as="div" className="section-heading">
          <p className="eyebrow">01 · About me</p>
          <h2>
            Developer with a practical, <em>problem-solving</em> mindset.
          </h2>
        </Reveal>

        <Reveal as="div" className="about-copy" delay={100}>
          <p>
            I enjoy turning ideas into working interfaces and systems. My
            experience includes front-end development, WordPress/Elementor,
            PHP, MariaDB, CRM-connected loan pages, Google Ads integration,
            and everyday IT troubleshooting.
          </p>

          <p>
            I&apos;m especially interested in opportunities where I can keep
            improving my development skills while contributing to real
            projects and learning from a team.
          </p>

          <div className="about-facts">
            <div>
              <span>Based in</span>
              <strong>Philippines</strong>
            </div>
            <div>
              <span>Specialty</span>
              <strong>Web &amp; IT</strong>
            </div>
            <div>
              <span>Approach</span>
              <strong>Learn · Build · Improve</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
