export default function Footer() {
  return (
    <footer className="footer-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">For Clients</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Find expert</a></li>
              <li><a href="#">Post a job</a></li>
              <li><a href="#">How hiring works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Enterprise solution</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">For Talent</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Become expert</a></li>
              <li><a href="#">Find projects</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Profile guidelines</a></li>
              <li><a href="#">Talent FAQ’s</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Help center</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Platform guidelines</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0">
            © 2026 RK Software Solutions. All rights reserved.
          </p>

          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-google"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
