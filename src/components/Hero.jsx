export default function Hero() {
  return (
    <section className="py-5" style={{ background: "#0b0b0b", minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6 text-white">
            <h1 className="display-4 fw-bold">
              We build <br /> digital experiences.
            </h1>

            <p className="mt-4 text-secondary">
              We create modern websites, mobile applications, and
              scalable digital products that help businesses grow.
            </p>

            <a href="/services" className="btn btn-outline-light mt-3">
              Let’s work together →
            </a>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-md-6 position-relative text-center">
            <img
              src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3"
              className="img-fluid rounded shadow"
              alt="design"
            />

            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
              className="img-fluid rounded shadow position-absolute"
              style={{ width: "45%", top: "60%", left: "-10%" }}
              alt="code"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
