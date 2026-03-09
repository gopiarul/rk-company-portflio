export default function Contact() {
  return (
    <section className="py-5" style={{ background: "#f4f7ff" }}>
      <div className="container">
        <div className="row g-0 shadow-lg rounded overflow-hidden bg-white">

          {/* LEFT SIDE */}
          <div className="col-md-5 p-5" style={{ background: "#0b1b3f", color: "#fff" }}>
            <h2 className="fw-bold mb-3">What will be next step?</h2>
            <p className="text-light mb-4">
              You are one step closer to build your perfect product.
            </p>

            <div className="mb-4">
              <h6 className="fw-bold">1. We’ll prepare a proposal</h6>
              <p className="small text-light">
                Required scope, timeline and approximate price will be included.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold">2. Together we discuss it</h6>
              <p className="small text-light">
                We discuss all possible options and finalize the plan.
              </p>
            </div>

            <div>
              <h6 className="fw-bold">3. Let’s start building</h6>
              <p className="small text-light">
                Once approved, we start development immediately.
              </p>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rkss"
              target="_blank"
              className="btn btn-outline-light btn-sm mt-4"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-md-7 p-5">
            <h5 className="fw-bold mb-4">
              Write a few words about your project and we’ll prepare a proposal within
              <span className="text-primary"> 24 hours</span>.
            </h5>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your e-mail" />
                </div>

                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Company" />
                </div>

                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Approx. budget" />
                </div>

                <div className="col-12">
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Project details (optional)"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-dark w-100 py-2 fw-bold">
                    Send
                  </button>
                </div>
              </div>
            </form>

            <p className="text-muted small mt-3">
              Or email directly:
              <strong> rkopenmail@gmail.com</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
