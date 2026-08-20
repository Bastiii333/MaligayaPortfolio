import "./ProjectMediaModal.css";
import { useEffect, useState } from "react";

import pcPlannerVideo from "../../../Assets/PC PLANNER - Google Chrome 2026-07-20 17-27-28.mp4";
import tagSciVideo from "../../../Assets/my-app - Google Chrome 2026-07-20 17-32-39.mp4";
import landingSlide1 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy3-2026-03-18-16_30_58.png";
import landingSlide2 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy4-2026-03-18-16_31_11.png";
import landingSlide3 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy5-2-2026-03-18-16_31_22.png";
import landingSlide4 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy5-2026-03-18-16_28_34(1).png";
import landingSlide5 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy5-2026-03-18-16_28_34.png";
import landingSlide6 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy6orig-2026-03-18-16_31_47.png";
import landingSlide7 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-elementor-1624copy-2026-03-18-16_30_33.png";

const landingSlides = [
  landingSlide1,
  landingSlide2,
  landingSlide3,
  landingSlide4,
  landingSlide5,
  landingSlide6,
  landingSlide7,
];

export default function ProjectMediaModal({ project, onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const onEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEsc);
    };
  }, [project, onClose]);

  useEffect(() => {
    if (!project || project.preview !== "loan") {
      return undefined;
    }

    setActiveSlide(0);

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % landingSlides.length);
    }, 2600);

    return () => clearInterval(timer);
  }, [project]);

  if (!project) {
    return null;
  }

  const isLoan = project.preview === "loan";
  const isPcPlanner = project.preview === "pcplanner";
  const isTagSci = project.preview === "tagsci";

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          aria-label="Close preview"
          onClick={onClose}
        >
          x
        </button>

        <div className="project-modal-header">
          <p>{project.type}</p>
          <h3 id="project-modal-title">{project.title}</h3>
        </div>

        <div className="project-modal-media">
          {isLoan && (
            <>
              <img
                src={landingSlides[activeSlide]}
                alt={`Landing page screenshot ${activeSlide + 1}`}
              />

              <div className="modal-slide-controls">
                <button
                  type="button"
                  className="slide-btn"
                  onClick={() =>
                    setActiveSlide((current) =>
                      current === 0 ? landingSlides.length - 1 : current - 1
                    )
                  }
                >
                  Prev
                </button>

                <div className="modal-dots" aria-hidden="true">
                  {landingSlides.map((_, index) => (
                    <span
                      key={index}
                      className={index === activeSlide ? "dot active" : "dot"}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="slide-btn"
                  onClick={() =>
                    setActiveSlide((current) =>
                      (current + 1) % landingSlides.length
                    )
                  }
                >
                  Next
                </button>
              </div>
            </>
          )}

          {isPcPlanner && (
            <video src={pcPlannerVideo} controls autoPlay muted loop playsInline />
          )}

          {isTagSci && (
            <video src={tagSciVideo} controls autoPlay muted loop playsInline />
          )}

          {!isLoan && !isPcPlanner && !isTagSci && (
            <div className="modal-fallback">
              Preview is not available for this project yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
