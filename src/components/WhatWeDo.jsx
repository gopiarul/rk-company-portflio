export default function WhatWeDo() {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">

        <h2 className="fw-bold mb-3">What we actually do?</h2>
        <p className="text-muted mb-5">
          We deliver complete digital solutions with design, development
          and deployment.
        </p>

        <div className="row g-4">

          {/* UI/UX */}
          <div className="col-md-4">
            <div className="card border-0 shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26"
                className="card-img-top"
                alt="uiux"
              />
              <div className="card-body text-start">
                <h5 className="fw-bold">UI/UX Design</h5>
                <p className="text-muted">
                  Modern, user-friendly interfaces focused on user experience.
                </p>
              </div>
            </div>
          </div>

          {/* WEB */}
          <div className="col-md-4">
            <div className="card border-0 shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                className="card-img-top"
                alt="web"
              />
              <div className="card-body text-start">
                <h5 className="fw-bold">Web Development</h5>
                <p className="text-muted">
                  Scalable websites and web apps using React, Django & PHP.
                </p>
              </div>
            </div>
          </div>

          {/* BRANDING */}
          <div className="col-md-4">
            <div className="card border-0 shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f"
                className="card-img-top"
                alt="branding"
              />
              <div className="card-body text-start">
                <h5 className="fw-bold">Branding & Strategy</h5>
                <p className="text-muted">
                  Strong digital presence with branding & strategy.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
