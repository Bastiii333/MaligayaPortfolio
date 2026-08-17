import useReveal from "../../hooks/useReveal";

/**
 * Wraps any element and fades/slides it in the first time it scrolls
 * into view. Replaces the old "animate once on page load" behaviour
 * so content below the fold feels alive as you scroll, not just on load.
 *
 * <Reveal as="section" className="hero" delay={100}>...</Reveal>
 */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, isVisible] = useReveal();
  const classes = ["reveal", isVisible ? "in-view" : "", className].filter(Boolean).join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
