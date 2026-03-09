export default function AboutPreview() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-8">
            <h2 className="fw-bold mb-3">About RK Software Solutions</h2>

            <p>
              <strong>RK Software Solutions</strong> is your go-to partner for
              affordable and scalable software solutions. Based in
              <strong> Puducherry</strong>, we have
              <strong> 6+ years of experience</strong> helping businesses get online.
            </p>

            <p>
              From simple websites to comprehensive ERP systems,
              we focus on quality, affordability, and your success.
            </p>

            {/* SEE MORE */}
            <a href="/about" className="btn btn-primary mt-2">
              See More
            </a>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="fw-bold">Quick Info</h6>
                <ul className="list-unstyled mb-0">
                  <li>📍 Puducherry</li>
                  <li>💼 6+ Years Experience</li>
                  <li>💰 ₹3,000 – ₹3,00,000</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
  