import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} Sebastian Maligaya
        </span>
        <span>Designed &amp; built with React.</span>
      </div>
    </footer>
  );
}
