import React, { useState } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

const TokenSale = ({ buyToken, tokenSale }) => {
  const [nToken, setNToken] = useState(1);

  const percentage = (tokenSale?.tokenSold / tokenSale?.tokenSaleBalance) * 100;
  const showPercentage = percentage.toString();

  return (
    <section
      id="token"
      class="section_token token_sale bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/token_bg.png"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Sale
              </h4>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                Join the industry leaders to discuss where the markets are
                heading. We accept token payments.
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Starting time :
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                July 23, 2023 (Mon 10:00 AM)
              </p>
            </div>
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                Ending time :
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                Dec 18, 2024 (Mon 12:00 PM)
              </p>
            </div>
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                Tokens exchange rate
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.2s"
              >
                1 ETH = 1 TBC, 1 BCC = 1 BCC
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div
                class="tk_countdown text-center animation token_countdown_bg"
                data-animation="fadeIn"
                data-animation-delay="1s"
              >
                <div method="post" name="enq" class="field_form">
                  <div class="row">
                    <div
                      class="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <input
                        type="number"
                        required="required"
                        placeholder="1"
                        id="first-name"
                        min={1}
                        class="form-control"
                        onChange={(e) => setNToken(e.target.value)}
                        name="name"
                      />
                    </div>
                  </div>
                </div>
                <div class="tk_counter_inner">
                  <div
                    class="progress animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.3s"
                  >
                    <div
                      class="progress-bar progress-bar-striped gradient "
                      role="progressbar"
                      aria-valuenow={`${percentage}`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${percentage}%`,
                      }}
                    >
                      {showPercentage.slice(0, 4)}%
                    </div>

                    <span class="progress_label bg-white inline_style_1">
                      <strong> {tokenSale?.tokenSold} TBC </strong>
                    </span>
                    <span class="progress_label bg-white inline_style_2">
                      <strong> {tokenSale?.tokenSaleBalance} TBC </strong>
                    </span>
                    <span class="progress_min_val">Sale Raised</span>
                    <span class="progress_max_val">Soft-caps</span>
                  </div>
                  <a
                    onClick={() => buyToken(nToken)}
                    class="btn btn-default btn-radius animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.4s"
                  >
                    Buy Tokens <BsArrowRight />
                  </a>
                  <ul class="icon_list list_none d-flex justify-content-center">
                    <li
                      class="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.5s"
                    >
                      <FaEthereum />
                    </li>
                    <li
                      class="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.6s"
                    >
                      <BsCurrencyBitcoin />
                    </li>
                    <li
                      class="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.7s"
                    >
                      <SiRipple />
                    </li>
                    <li
                      class="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.8s"
                    >
                      <SiLitecoin />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Low - High 24h :
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                $ 6,455.83 - $ 7,071.42
              </p>
            </div>
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                Total tokens sale
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                {tokenSale?.tokenSold} TBC {showPercentage.slice(0, 4)}%
              </p>
            </div>
            <div class="pr_box">
              <h6
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                Acceptable Currency :
              </h6>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="1.2s"
              >
                BTC, Eth, Ltc, XRP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
