import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  const footerList = [
    "Cryptocash ICO",
    "How It Works",
    "Tokens",
    "FAQ",
    "Contact",
  ];
  return (
    <footer>
      <div
        class="top_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <div
                class="footer_logo mb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home_section" class="page-scroll">
                  <img alt="logo" src="assets/images/footer_logo.png" />
                </a>
              </div>
              <div class="footer_desc">
                <p
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Cryptocash stands firmly in support of financial freedom and
                  the liberty that Bitcoin provides globally for anyone to
                  voluntarily participate in a permissionless and decentralized
                  network.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
              <h4
                class="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Quick Links
              </h4>
              <ul class="footer_link ">
                {footerList.map((list, i) => (
                  <li
                    key={i + 1}
                    class="animation"
                    data-animation="fadeInUp"
                    data-animation-delay={`0.${i + 2}s`}
                  >
                    <a href="#">{list}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div class="newsletter_form">
                <h4
                  class="footer_title border_title animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Newsletter
                </h4>
                <p
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  By subscribing to our mailing list you will always be update
                  with the latest news from us.
                </p>
                <form
                  class="subscribe_form animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  <input
                    class="input-rounded"
                    type="text"
                    required
                    placeholder="Enter Email Address"
                  />
                  <button
                    type="submit"
                    title="Subscribe"
                    class="btn-info"
                    name="submit"
                    value="Submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="copyright">
                Copyright &copy; 2018 All Rights Reserved.
              </p>
            </div>
            <div class="col-md-6">
              <ul class="list_none footer_menu">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
