import "./ProjectPreview.css";
import { useEffect, useState } from "react";
import pcPlannerVideo from "../../../Assets/PC PLANNER - Google Chrome 2026-07-20 17-27-28.mp4";
import TagSci from "../../../Assets/my-app - Google Chrome 2026-07-20 17-32-39.mp4";
import landingSlide1 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy3-2026-03-18-16_30_58.png";
import landingSlide2 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy4-2026-03-18-16_31_11.png";
import landingSlide3 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy5-2-2026-03-18-16_31_22.png";
import landingSlide4 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy5-2026-03-18-16_28_34(1).png";
import landingSlide5 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy5-2026-03-18-16_28_34.png";
import landingSlide6 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-copy6orig-2026-03-18-16_31_47.png";
import landingSlide7 from "../../../Assets/Wordpress Landing Page/screencapture-sparkloan-co-kr-elementor-1624copy-2026-03-18-16_30_33.png";

export default function ProjectPreview({ type }) {
	const landingSlides = [
		landingSlide1,
		landingSlide2,
		landingSlide3,
		landingSlide4,
		landingSlide5,
		landingSlide6,
		landingSlide7,
	];
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		if (type !== "loan") {
			return undefined;
		}

		const intervalId = setInterval(() => {
			setActiveSlide((current) => (current + 1) % landingSlides.length);
		}, 2300);

		return () => clearInterval(intervalId);
	}, [type, landingSlides.length]);

	if (type === "pcplanner") {
		return (
			<div className="preview-browser">
				<div className="preview-top">
					<i />
					<i />
					<i />
				</div>



				<div className="video-preview-wrap">
					<video
						className="video-preview"
						src={pcPlannerVideo}
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
			</div>
      
		);
	}

	if (type === "loan") {
		return (
			<div className="preview-browser">
				<div className="preview-top">
					<i />
					<i />
					<i />
				</div>

				<div className="slideshow-wrap">
					<img
						className="slideshow-image"
						src={landingSlides[activeSlide]}
						alt={`WordPress landing page screenshot ${activeSlide + 1}`}
					/>

					<div className="slideshow-dots" aria-hidden="true">
						{landingSlides.map((_, index) => (
							<span
								key={index}
								className={index === activeSlide ? "dot active" : "dot"}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}

	if (type === "tagsci") {
		return (

      			<div className="preview-browser">
				<div className="preview-top">
					<i />
					<i />
					<i />
				</div>

			<div className="video-preview-wrap">
					<video
						className="video-preview"
						src={TagSci}
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
			</div>
      
      

		);
	}

	return (
		<div className="site-ui">
			<div className="site-nav">
				<strong>Preview</strong>
				<span />
			</div>

			<div className="site-body">
				<small>Portfolio project</small>
				<b>Modern web UI</b>
				<i />
			</div>
		</div>
	);
}
