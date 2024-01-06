import React from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Banner = ({ transferNativeToken }) => {
  return (
    <section
      id="home_section"
      class="section_banner bg_black_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/banner_bg2.png"
    >
      <div class="banner_effect"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12 order-lg-first">
            <div class="banner_text_s2 text_md_center">
              <h1
                class="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                <strong>Bitcoin</strong> is peer to peer innovative
                <strong>network</strong>
              </h1>
              <h5
                class="animation presale_txt text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.3s"
              >
                Token Presale is <mark class="gradient_box">Live</mark>
              </h5>

              <div
                class="btn_group pt-2 pb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                <a
                  href="#whitepaper"
                  class="btn btn-default btn-radius nav-link content-popup"
                >
                  Whitepaper
                  <BsArrowRight />
                </a>
                <a href="#token" class="btn btn-border btn-radius">
                  Buy Token Now! <BsArrowRight />
                </a>
                <a
                  onClick={() => transferNativeToken()}
                  class="btn btn-border btn-radius"
                >
                  Transfer Token <BsArrowRight />
                </a>
              </div>
              <span
                class="text-white icon_title animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                We accept :
              </span>
              <ul class="list_none currency_icon">
                <li
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.5s"
                >
                  <span className="new_icon_style ">
                    <BsCurrencyBitcoin className="new_font_size" />
                    <span>Bitcoin</span>
                  </span>
                </li>
                <li
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.6s"
                >
                  <span className="new_icon_style ">
                    <FaEthereum className="new_font_size" />
                    <span>Ethereum </span>
                  </span>
                </li>
                <li
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.7s"
                >
                  <span className="new_icon_style ">
                    <SiLitecoin className="new_font_size" />
                    <span>Litecoin</span>
                  </span>
                </li>
                <li
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.8s"
                >
                  <span className="new_icon_style ">
                    <SiRipple className="new_font_size" />
                    <span>Ripple</span>
                  </span>
                </li>
              </ul>
              <div id="whitepaper" class="team_pop mfp-hide">
                <div class="row m-0">
                  <div class="col-md-7">
                    <div class="pt-3 pb-3">
                      <div class="title_dark title_border">
                        <h4>Download Whitepaper</h4>
                        <p>
                          A purely peer-to-peer version of electronic cash would
                          allow online payments to be sent directly from one
                          party to another without going through a financial
                          institution.Digital signatures provide part of the
                          solution, but the main benefits are lost if a trusted
                          third party is still required to prevent
                          double-spending.
                        </p>
                        <p>
                          The network timestamps transactions by hashing them
                          into an ongoing chain of hash-based proof-of-work,
                          forming a record that cannot be changed without
                          redoing the proof-of-work.
                        </p>
                        <a href="#" class="btn btn-default btn-radius">
                          Download Now <AiOutlineCloudDownload />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <img
                      class="pt-3 pb-3"
                      src="assets/images/whitepaper.png"
                      alt="whitepaper"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 order-first">
            <div
              class="banner_image_right res_md_mb_50 res_xs_mb_30 animation"
              data-animation-delay="1.5s"
              data-animation="fadeInRight"
            >
              <img
                className="new_image_css"
                alt="banner_vector2"
                src="assets/images/banner_img2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
