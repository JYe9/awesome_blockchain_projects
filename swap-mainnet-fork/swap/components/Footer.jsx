import React from "react";

const Footer = () => {
  return (
    <div
      class="footer"
      style={{ backgroundImage: "url('assets/img/footer-bg.png')" }}
    >
      <div class="container">
        <div class="row">
          <div
            class="col-12 wow fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.2s"
          >
            <div class="top-footer">
              <div class="logo">
                <img src="assets/img/logo.png" alt="" />
              </div>
              <a href="#" class="button-1">
                Get In touch{" "}
              </a>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div
            class="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
          >
            <div class="footer-box">
              <h4 class="lasthead">Company</h4>
              <ul class="footer-link">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="affiliate.html">Affiliate</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.4s"
            data-wow-delay="0.4s"
          >
            <div class="footer-box">
              <h4 class="lasthead">Support</h4>
              <ul class="footer-link">
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <div class="footer-box">
              <h4 class="lasthead">Policy</h4>
              <ul class="footer-link">
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-5 col-md-6 wow fadeInUp"
            data-wow-duration="0.6s"
            data-wow-delay="0.6s"
          >
            <div class="footer-box">
              <h4 class="lasthead">Newsletter</h4>
              <form action="#">
                <div class="form-group">
                  <input type="email" placeholder="Enter email address" />

                  <button type="submit" class="button-1">
                    Join Now
                  </button>
                </div>
              </form>
              <div class="social-style">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 text-center wow fadeInUp"
            data-wow-duration="0.4s"
            data-wow-delay="0.4s"
          >
            <div class="footer-bottom">
              <p class="text">
                Copyright &copy; <a href="#">Gooland</a> | <a href="#">2021</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
