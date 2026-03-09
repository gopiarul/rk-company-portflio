import boss from "../assets/boss.jpg";   // Add leader image
import office from "../assets/office.jpg";   // Add company image

export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="fw-bold display-5">About RK Software Solutions</h1>
          <p className="lead mt-3">
            Empowering businesses with scalable and reliable digital solutions.
          </p>
        </div>
      </section>

      {/* COMPANY STORY SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={office}
                alt="Company"
                className="img-fluid rounded-4 shadow"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Our Story</h2>
              <p className="text-muted">
                RK Software Solutions, based in Puducherry,
                has <strong>6+ years of experience</strong>
                delivering high-quality web, mobile, and enterprise
                software solutions.
              </p>

              <div className="row mt-4">
                <div className="col-4 text-center">
                  <h4 className="text-primary fw-bold">6+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="col-4 text-center">
                  <h4 className="text-primary fw-bold">50+</h4>
                  <p>Projects</p>
                </div>
                <div className="col-4 text-center">
                  <h4 className="text-primary fw-bold">100%</h4>
                  <p>Client Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100 border-0">
                <h5 className="fw-bold text-primary">Company History</h5>
                <p className="text-muted mt-2">
                  Delivering scalable digital solutions to startups and
                  growing enterprises across industries.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100 border-0">
                <h5 className="fw-bold text-success">Our Mission</h5>
                <p className="text-muted mt-2">
                  To provide affordable, high-quality, and secure software
                  that drives real business growth.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-4 shadow-sm h-100 border-0">
                <h5 className="fw-bold text-danger">Our Values</h5>
                <p className="text-muted mt-2">
                  Clean code, honest pricing, transparency, innovation,
                  and long-term client partnerships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-4 text-center">
              <img
                src={boss}
                alt="Rajkumar B"
                className="img-fluid rounded-circle shadow mb-3"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </div>

            <div className="col-md-8">
              <h3 className="fw-bold text-primary">Leadership</h3>
              <h5 className="fw-bold mt-2">Rajkumar B</h5>
              <p className="text-muted">
                CTO & Senior Software Developer with
                <strong> 6+ years of industry experience</strong>
                in Full Stack Development, Backend Architecture,
                Android Applications, REST APIs, and scalable systems.
              </p>

              <ul className="list-unstyled">
                <li>✔ Full Stack Development</li>
                <li>✔ Backend Architecture</li>
                <li>✔ Android Applications</li>
                <li>✔ API & Database Design</li>
                <li>✔ Project Leadership</li>
              </ul>

              <p className="fw-bold mt-3">
                Project Pricing: ₹3,000 – ₹3,00,000
              </p>

              <a
                href="https://sites.google.com/view/rajkumar-b-senior-software-dev/home"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Full Profile
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
