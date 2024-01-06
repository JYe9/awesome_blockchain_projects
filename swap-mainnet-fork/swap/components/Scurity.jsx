import React from "react";

const Scurity = () => {
  return (
    <div class="scurity">
      <div class="icon-one">
        <img src="./assets/img/scurity-vector-1.png" alt="" />
      </div>
      <div class="icon-two">
        <img src="./assets/img/scurity-vector-2.png" alt="" />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-lg-10 text-center wow fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.2s"
          >
            <div class="section-head">
              <h4 class="lasthead">Secure Exchanges</h4>
              <h2 class="title">Security & Compliance</h2>
              <p class="text">Top-level security is our highest priority</p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="row justify-content-center">
            <div
              class="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-duration="0.3s"
              data-wow-delay="0.3s"
            >
              <div class="scurity-box one">
                <div class="icon">
                  <img src="./assets/img/scurity-icon-1.png" alt="" />
                </div>
                <div class="content">
                  <h5 class="cont-head">3-D Secure</h5>
                  <p class="text">Transaction Security</p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-duration="0.4s"
              data-wow-delay="0.4s"
            >
              <div class="scurity-box two">
                <div class="icon">
                  <img src="./assets/img/scurity-icon-2.png" alt="" />
                </div>
                <div class="content">
                  <h5 class="cont-head">PCI DSS</h5>
                  <p class="text">Security Standard</p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.5s"
            >
              <div class="scurity-box three">
                <div class="icon">
                  <img src="./assets/img/scurity-icon-3.png" alt="" />
                </div>
                <div class="content">
                  <h5 class="cont-head">2FA</h5>
                  <p class="text">2-step verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scurity;
