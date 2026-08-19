import "./UnavailablePreviewModal.css";
import { useEffect } from "react";

export default function UnavailablePreviewModal({ project, onClose }) {
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

  if (!project) {
    return null;
  }

  return (
    <div className="unavailable-modal-overlay" onClick={onClose}>
      <div
        className="unavailable-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="unavailable-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="unavailable-modal-close"
          aria-label="Close message"
          onClick={onClose}
        >
          x
        </button>

        <p className="unavailable-modal-eyebrow">{project.title}</p>
        <h3 id="unavailable-modal-title">Sorry, unavailable</h3>
        <p className="unavailable-modal-message">
          No preview for now. Please check back later.
        </p>
        <button type="button" className="unavailable-modal-action" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
