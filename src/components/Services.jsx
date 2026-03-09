import web from "../assets/web.jpg";
import moblie from "../assets/moblie.jpg";
import cosutmer from "../assets/cosutmer.jpg";

export default function Services() {
  return (
    <section className="py-5 services-light">
      <div className="container">

        {/* Top Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <small className="text-success fw-semibold">Our Service</small>
            <h2 className="fw-bold mt-2">
              Comprehensive Solutions, <br /> All in One Place
            </h2>
          </div>

          <div className="col-md-6">
            <p className="text-muted">
              From infrastructure and cybersecurity to web and mobile
              development — we deliver scalable and secure solutions
              tailored to your business needs.
            </p>
          </div>
        </div>

        {/* Service 1 */}
        <div className="row align-items-center service-block mb-5">
          <div className="col-md-6">
            <img
              src={web}
              alt="Web Development"
              className="img-fluid rounded-4 service-img"
            />
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold">Web Development</h4>
            <p className="text-muted">
              Custom websites, CMS, e-commerce platforms and
              enterprise web solutions.
            </p>
            <button className="btn btn-outline-success btn-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="row align-items-center service-block flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img
              src={moblie}
              alt="Mobile Development"
              className="img-fluid rounded-4 service-img"
            />
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold">Mobile App Development</h4>
            <p className="text-muted">
              Android & iOS apps with modern UI,
              secure backend and Play Store deployment.
            </p>
            <button className="btn btn-outline-success btn-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* Service 3 */}
        <div className="row align-items-center service-block mb-5">
          <div className="col-md-6">
            <img
              src={cosutmer}
              alt="Custom Software"
              className="img-fluid rounded-4 service-img"
            />
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold">Custom Software</h4>
            <p className="text-muted">
              ERP systems, CRM dashboards, APIs and
              business automation tools.
            </p>
            <button className="btn btn-outline-success btn-sm">
              Get Started
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
