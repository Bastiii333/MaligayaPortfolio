import "./Contact.css";
import Reveal from "../Reveal/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <Reveal as="div" className="container contact-card">
        <div>
          <p className="eyebrow">04 · Contact</p>
          <h2>Have a project or opportunity in mind?</h2>
          <p>
            I&apos;m open to discussing web development, IT, internship, and
            junior developer opportunities.
          </p>
        </div>

        <div className="contact-actions">
          <a className="contact-link" href="mailto:sebastianmaligaya@gmail.com">
            sebastianmaligaya@gmail.com <span>↗</span>
          </a>
          <a
            className="contact-link"
            href="https://github.com/Bastiii333/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile <span>↗</span>
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/sebastian-maligaya-2a6449262"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile <span>↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
