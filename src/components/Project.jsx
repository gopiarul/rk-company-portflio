
import dance from "../assets/dance.jpg";
import giftweb from "../assets/giftweb.jpg";
import beautyfull from "../assets/beautyfull.jpg";

export default function Projects() {
  return (
    <section className="project-page">

      <div className="container">

        {/* Page Header */}
        <div className="project-header">
          <h1>Portfolio.</h1>
          <p>
            Our portfolio showcases previous work and highlights
            the quality of our services.
          </p>
        </div>

        {/* ================= PROJECT 1 ================= */}
        <div className="project-row">

          <div className="project-image">
            <img src={giftweb} alt="Impressive Gift" />
          </div>

          <div className="project-content">
            <h2>Impressive Gift</h2>
            <p>
              E-commerce gifting website with product catalog,
              cart system and secure checkout.
            </p>

            <div className="project-meta">
              <p><strong>Client:</strong> Impressive Gift</p>
              <p><strong>Type:</strong> E-commerce</p>
            </div>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <a
              href="https://impressivegift.in/"
              target="_blank"
              className="visit-btn"
            >
              Visit Website
            </a>
          </div>

        </div>

        {/* ================= PROJECT 2 ================= */}
        <div className="project-row reverse">

          <div className="project-image">
            <img src={beautyfull} alt="Sumithra Makeover" />
          </div>

          <div className="project-content">
            <h2>Sumithra Makeover</h2>
            <p>
              Beauty & makeover business website with booking
              system and service showcase.
            </p>

            <div className="project-tags">
              <span>UI Design</span>
              <span>Development</span>
            </div>

            <a
              href="https://sumithramakeover.com/"
              target="_blank"
              className="visit-btn"
            >
              Visit Website
            </a>
          </div>

        </div>

        {/* ================= PROJECT 3 ================= */}
        <div className="project-row">

          <div className="project-image">
            <img src={dance} alt="AIMDAF" />
          </div>

          <div className="project-content">
            <h2>AIMDAF</h2>
            <p>
              Association management platform with admin dashboard
              and membership system.
            </p>

            <div className="project-tags">
              <span>Dashboard</span>
              <span>Backend</span>
              <span>Admin Panel</span>
            </div>

            <a
              href="https://www.aimdaf.in/"
              target="_blank"
              className="visit-btn"
            >
              Visit Website
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
