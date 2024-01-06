import React from "react";

const Staking = () => {
  return (
    <div class="staking-area bg-color-2 fix area-padding-2">
      <div class="container">
        <div class=" row align-items-center justify-content-center">
          <div class="col-xl-8 col-lg-8 col-md-8">
            <div class="section-bg-headline">
              <div class="top-text-title">STACKING INVESTMENT PLATFORM</div>
              <h2>
                Staking <span class="color-text-bold">Graphbit token</span>{" "}
                secure own wallet
              </h2>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4">
            <div class="section-bg-btn">
              <a href="stacking.html" class="head-btn coin-btn">
                Explore More
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          {[
            "Silver staking plan",
            "Gold staking plan",
            "Diamond staking plan",
          ].map((el, i) => (
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="staking-inner wow fadeInUp" data-wow-delay="0.2s">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-md-5">
                    <div class="staking-content">
                      <div class="stack-time">
                        <h3>{el}</h3>
                        <ul>
                          <li>
                            <a class="active" href="#">
                              15 DAYS
                            </a>
                          </li>
                          <li>
                            <a href="#">30 DAYS</a>
                          </li>
                          <li>
                            <a href="#">60 DAYS</a>
                          </li>
                        </ul>
                        <span class="part-stack">
                          Participet investor <span>2130</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7 col-lg-7 col-md-7">
                    <div class="stack-name ">
                      <div class="stack-money">
                        <div class="plan-money">
                          <ul>
                            <li>
                              <a href="#">
                                Diposite- 100 USD<span> = </span>Payment- 1000
                                CNS
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Diposite- 200 USD<span> = </span>Payment- 2000
                                CNS
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Diposite- 300 USD<span> = </span>Payment- 3000
                                CNS
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="stack-btn coin-btn">
                        <a href="stacking.html">Stacking</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staking;
