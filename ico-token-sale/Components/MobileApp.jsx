import React from "react";
import { IoLogoApple } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";
const MobileApp = () => {
  return (
    <section
      id="mobileapp"
      class="bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/app_bg.png"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="title_default_light title_border text_md_center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Download Mobile App
              </h4>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                The use of crypto-currencies has become more widespread, and
                they are now increasingly accepted as a legitimate currency for
                transactions. Bitcoin is the first ever cryptocurrency and is
                used like other assets in exchange for goods and services.
              </p>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                Send, receive, and exchange Bitcoin, Ethereum, & Bitcoin Cash
                instantly with anyone in the world. Securely buy and sell
                bitcoin alongside your already safely stored cryptocurrency.
              </p>
            </div>
            <div
              class="btn_group text_md_center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.8s"
            >
              <a href="#" class="btn btn-default btn-radius">
                <AiFillAndroid className="new_font_size" />
                Google Store
              </a>
              <a href="#" class="btn btn-default btn-radius">
                <IoLogoApple className="new_font_size" />
                Apple Store
              </a>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12">
            <div
              class="res_md_mt_50 res_sm_mt_30 text-center animation"
              data-animation="fadeInRight"
              data-animation-delay="0.2s"
            >
              <img src="assets/images/mobile_app3.png" alt="mobile_app3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
