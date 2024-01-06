import React from "react";

const Feature = () => {
  return (
    <div class="fature" id="howworks">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-12 text-center wow fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
          >
            <div class="section-head">
              <h4 class="lasthead">How does it work?</h4>
              <h2 class="title">It's really easy!</h2>
              <p class="text">
                It's easier than you think.Follow 3 simple easy steps
              </p>
            </div>
          </div>

          <div
            class="col-xl-4 col-lg-6 text-center wow fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
          >
            <div class="feature-box">
              <div class="tumb">
                <img src="assets/img/feature-icon-1.png" alt="" />
              </div>
              <p class="text">
                You choose the currency and <br />
                payment method
              </p>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 text-center wow fadeInUp"
            data-wow-duration="0.4s"
            data-wow-delay="0.4s"
          >
            <div class="feature-box">
              <div class="tumb">
                <img src="assets/img/feature-icon-2.png" alt="" />
              </div>
              <p class="text">
                Pass account <br />
                verification
              </p>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 text-center wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <div class="feature-box">
              <div class="tumb">
                <img src="assets/img/feature-icon-3.png" alt="" />
              </div>
              <p class="text">
                Receive <br />
                cryptocurrency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
