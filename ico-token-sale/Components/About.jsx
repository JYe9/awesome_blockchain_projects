import React from "react";
import { BsArrowRight } from "react-icons/bs";
const About = () => {
  return (
    <section id="about" class="small_pt">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="text_md_center">
              <img
                class="animation"
                data-animation="zoomIn"
                data-animation-delay="0.2s"
                src="assets/images/about_img2.png"
                alt="aboutimg2"
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div class="title_default_light title_border">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                About The Cryptocash
              </h4>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                Cryptocash is one of the most transformative technologies since
                the invention of the Internet. Cryptocash stands firmly in
                support of financial freedom and the liberty that Bitcoin
                provides globally for anyone to voluntarily participate in a
                permissionless and decentralized network.
              </p>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                which empowers people to not be marginalized by governments and
                financial institutions. Bitcoin is freedom.
              </p>
            </div>
            <a
              href="https://www.youtube.com/watch?v=ZE2HxTmxfrI"
              class="btn btn-default btn-radius video animation"
              data-animation="fadeInUp"
              data-animation-delay="1s"
            >
              Let's Start <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
