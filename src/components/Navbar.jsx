import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container d-flex align-items-center justify-content-between">

        {/* LOGO */}
        <div className="logo fw-bold">
          RK SOFTWARE SOLUTION
        </div>

        {/* CENTER PILL NAV */}
        <nav className="pill-nav">
          <Link to="/" className="pill-link">Home</Link>
          <Link to="/about" className="pill-link">About me</Link>
          <Link to="/projects" className="pill-link">Work</Link>
          <Link to="/services" className="pill-link">Skills</Link>
        </nav>

        {/* CTA BUTTON */}
        <Link to="/contact" className="chat-btn">
          Let’s chat
        </Link>

      </div>
    </header>
  );
}
