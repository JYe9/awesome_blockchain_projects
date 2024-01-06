import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact" class="contact_section small_pt">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Get In Touch!
              </h4>
            </div>
          </div>
        </div>
        <div class="row align-items-center small_space">
          <div class="col-lg-4 col-md-6 offset-lg-2">
            <div
              class="bg_light_dark contact_box_s2 animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.1s"
            >
              <div class="contact_title">
                <h5
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Contact With Us
                </h5>
                <p
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Our office is located in a beautiful building and garden
                </p>
              </div>
              <ul class="list_none contact_info mt-margin">
                <li
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  <i class="ion-ios-location"></i>
                  <div class="contact_detail">
                    <span>Address</span>
                    <p>22 International Division Via G.B. Pirelli</p>
                  </div>
                </li>
                <li
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.5s"
                >
                  <i class="ion-android-call"></i>
                  <div class="contact_detail">
                    <span>Phone</span>
                    <p>+23 0123 4567</p>
                  </div>
                </li>
                <li
                  class="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  <i class="ion-ios-email"></i>
                  <div class="contact_detail">
                    <span>Email-id</span>
                    <p>Yourmail@gmail.com</p>
                  </div>
                </li>
              </ul>
              <div class="contct_follow pt-2 pt-md-4">
                <span
                  class="text-uppercase animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Follow Us
                </span>
                <ul class="list_none social_icon">
                  <li
                    class="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    <a href="#">
                      <FaFacebookF className="icon_color" />
                    </a>
                  </li>
                  <li
                    class="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5s"
                  >
                    <a href="#">
                      <FaInstagram className="icon_color" />
                    </a>
                  </li>
                  <li
                    class="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.6s"
                  >
                    <a href="#">
                      <FaLinkedinIn className="icon_color" />
                    </a>
                  </li>
                  <li
                    class="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.7s"
                  >
                    <a href="#">
                      <FaTwitter className="icon_color" />
                    </a>
                  </li>
                  <li
                    class="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.8s"
                  >
                    <a href="#">
                      <FaYoutube className="icon_color" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div
              class="pt-4 pt-md-0 animation"
              data-animation="fadeInRight"
              data-animation-delay="0.1s"
            >
              <form method="post" name="enq" class="field_form">
                <div class="row">
                  <div
                    class="form-group col-md-12 animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    <input
                      type="text"
                      required="required"
                      placeholder="Enter Name *"
                      id="first-name"
                      class="form-control"
                      name="name"
                    />
                  </div>
                  <div
                    class="form-group col-md-12 animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.6s"
                  >
                    <input
                      type="email"
                      required="required"
                      placeholder="Enter Email *"
                      id="email"
                      class="form-control"
                      name="email"
                    />
                  </div>
                  <div
                    class="form-group col-md-12 animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.8s"
                  >
                    <input
                      type="text"
                      required="required"
                      placeholder="Enter Subject"
                      id="subject"
                      class="form-control"
                      name="subject"
                    />
                  </div>
                  <div
                    class="form-group col-md-12 animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1s"
                  >
                    <textarea
                      required="required"
                      placeholder="Message *"
                      id="description"
                      class="form-control"
                      name="message"
                      rows="2"
                    ></textarea>
                  </div>
                  <div
                    class="col-md-12 text-center animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.2s"
                  >
                    <button
                      type="submit"
                      title="Submit Your Message!"
                      class="btn btn-default btn-radius btn-block"
                      id="submitButton"
                      name="submit"
                      value="Submit"
                    >
                      Submit <BsArrowRight />
                    </button>
                  </div>
                  <div class="col-md-12">
                    <div id="alert-msg" class="alert-msg text-center"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
