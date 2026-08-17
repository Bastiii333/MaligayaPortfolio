import "./Hero.css";

import { useRef } from "react";
import Reveal from "../Reveal/Reveal";

export default function Hero() {
  const heroRef = useRef(null);

  const handleMouseMove = (event) => {
    const node = heroRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    node.style.setProperty("--spot-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <section id="home" className="hero section" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero-grid container">
        <Reveal as="div" className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            IT Developer · Web Development
          </p>

          <h1>
            I build <span className="gradient-text">useful digital experiences.</span>
          </h1>

          <p className="hero-description">
            I&apos;m Sebastian Maligaya, an IT graduate focused on building clean
            websites, practical dashboards, CRM integrations, and
            backend-powered applications.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my work <span>↓</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me <span>↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>3</strong>
              <span>Featured projects</span>
            </div>
            <div>
              <strong>BSIT</strong>
              <span>IT background</span>
            </div>
            <div>
              <strong>480h+</strong>
              <span>Hands-on OJT focus</span>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="hero-visual" delay={120}>
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="code-card">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <small>portfolio.js</small>
            </div>

<pre>
  <code>
    <span className="code-keyword">const</span>{" "}
    <span className="code-variable">developer</span>{" "}
    <span className="code-symbol">=</span>{" "}
    <span className="code-bracket">{"{"}</span>
    {"\n"}

    {"  "}
    <span className="code-property">name</span>
    <span className="code-symbol">:</span>{" "}
    <span className="code-string">"Sebastian Maligaya"</span>
    <span className="code-symbol">,</span>
    {"\n"}

    {"  "}
    <span className="code-property">focus</span>
    <span className="code-symbol">:</span>{" "}
    <span className="code-string">"Web Development"</span>
    <span className="code-symbol">,</span>
    {"\n"}

    {"  "}
    <span className="code-property">stack</span>
    <span className="code-symbol">:</span>{" "}
    <span className="code-bracket">[</span>
    {"\n"}

    {"    "}
    <span className="code-string">"HTML"</span>
    <span className="code-symbol">,</span>
    {"\n"}

    {"    "}
    <span className="code-string">"CSS"</span>
    <span className="code-symbol">,</span>
    {"\n"}

    {"    "}
    <span className="code-string">"JavaScript"</span>
    <span className="code-symbol">,</span>
    {"\n"}

    {"    "}
    <span className="code-string">"PHP"</span>
    <span className="code-symbol">,</span>
    {"\n"}

    {"    "}
    <span className="code-string">"MySQL"</span>
    {"\n"}

    {"  "}
    <span className="code-bracket">]</span>
    <span className="code-symbol">,</span>
    {"\n"}

    {"  "}
    <span className="code-property">mindset</span>
    <span className="code-symbol">:</span>{" "}
    <span className="code-string">"keep learning"</span>
    {"\n"}

    <span className="code-bracket">{"}"}</span>
    <span className="code-symbol">;</span>
    {"\n\n"}

    <span className="code-variable">developer</span>
    <span className="code-symbol">.</span>
    <span className="code-function">build</span>
    <span className="code-bracket">()</span>
    <span className="code-symbol">;</span>

    <span className="code-cursor" />
  </code>
</pre>
          </div>

          <div className="floating-chip chip-one">HTML / CSS / JS</div>
          <div className="floating-chip chip-two">PHP + MariaDB</div>
        </Reveal>
      </div>

      <a className="scroll-hint" href="#about">
        <span />
        Scroll to explore
      </a>
    </section>
  );
}
