import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg_blue_300 txt_white">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link className="me-4 text-reset" href={"/"}>
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link className="me-4 text-reset" href={"/"}>
              <i className="fab fa-twitter"></i>
            </Link>

            <Link className="me-4 text-reset" href={"/"}>
              <i className="fab fa-google"></i>
            </Link>

            <Link className="me-4 text-reset" href={"/"}>
              <i className="fab fa-instagram"></i>
            </Link>

            <Link className="me-4 text-reset" href={"/"}>
              <i className="fab fa-linkedin"></i>
            </Link>

            <Link className="me-4 text-reset" href={"/"}>
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <Link href={"/"}>Angular</Link>
                </p>
                <p>
                  <Link href={"/"}>React</Link>
                </p>
                <p>
                  <Link href={"/"}>Vue</Link>
                </p>
                <p>
                  <Link href={"/"}>Laravel</Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link href={"/"}>Pricing</Link>
                </p>
                <p>
                  <Link href={"/"}> Settings</Link>
                </p>
                <p>
                  <Link href={"/"}> Orders</Link>
                </p>
                <p>
                  <Link href={"/"}> Help</Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <Link href="https://mdbootstrap.com/"> MDBootstrap.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
