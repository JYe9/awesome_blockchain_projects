import React from "react";

const Distribution = () => {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 res_md_mb_40">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Sale Proceeds
              </h4>
            </div>
            <div
              class="lg_pt_20 res_sm_pt_0 text-center animation"
              data-animation="fadeInRight"
              data-animation-delay="0.2s"
            >
              <img
                src="assets/images/sale-proceeds3.png"
                alt="sale-proceeds3"
              />
            </div>
            <div class="divider small_divider"></div>
            <ul class="list_none list_chart text-center">
              <li>
                <span class="chart_bx color1"></span>
                <span>Addvisers</span>
              </li>
              <li>
                <span class="chart_bx color2"></span>
                <span>Marketing</span>
              </li>
              <li>
                <span class="chart_bx color3"></span>
                <span>Public Sale</span>
              </li>
              <li>
                <span class="chart_bx color4"></span>
                <span>Pre Sale</span>
              </li>
              <li>
                <span class="chart_bx color5"></span>
                <span>Projects</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Distribution
              </h4>
            </div>
            <div
              class="lg_pt_20 res_sm_pt_0 text-center animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.2s"
            >
              <img src="assets/images/distribution3.png" alt="distribution3" />
            </div>
            <div class="divider small_divider"></div>
            <ul class="list_none list_chart text-center">
              <li>
                <span class="chart_bx color1"></span>
                <span>ICO Sale</span>
              </li>
              <li>
                <span class="chart_bx color4"></span>
                <span>Build Out</span>
              </li>
              <li>
                <span class="chart_bx color2"></span>
                <span>Team & Advisers</span>
              </li>
              <li>
                <span class="chart_bx color5"></span>
                <span>Private Investors</span>
              </li>
              <li>
                <span class="chart_bx color3"></span>
                <span>Bounty</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distribution;
