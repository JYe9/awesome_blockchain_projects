import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import { shortenAddress } from "../Utils/index";

const LiquidityHistory = ({ GET_ALL_LIQUIDITY }) => {
  const [liquidity, setLiquidity] = useState([]);
  useEffect(() => {
    try {
      GET_ALL_LIQUIDITY().then((items) => {
        setLiquidity(items?.reverse());
      });
    } catch (error) {
      console.log("Please reload the browser");
    }
  }, []);
  return (
    <section>
      <div class="container">
        <div class="row medium-padding120">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div
              class="mCustomScrollbar scrollable-responsive-table"
              data-mcs-theme="dark"
            >
              <table class="pricing-tables-wrap-table-blurring">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Token A</th>
                    <th>Token B</th>
                    <th>Address A</th>
                    <th>Address B</th>
                    <th>PoolAddress</th>
                    <th>Created</th>
                    <th>Transaction Hash</th>
                  </tr>
                </thead>

                <tbody>
                  {liquidity?.map((liqudity, index) => (
                    <tr
                      key={index}
                      class="crumina-module crumina-pricing-table pricing-table--style-table-blurring c-brown"
                    >
                      <td>{index + 1}</td>
                      <td>
                        <div class="pricing-thumb">
                          <img
                            src={
                              liqudity?.network == "80001"
                                ? "img/80001.png"
                                : liqudity?.network == "157"
                                ? "img/80001.png"
                                : liqudity?.network == "1"
                                ? "img/1.png"
                                : liqudity?.network == "5"
                                ? "img/1.png"
                                : liqudity?.network == "11155111"
                                ? "img/1.png"
                                : "img/logo-primary.png"
                            }
                            class="woox-icon"
                            alt="bitcoin"
                          />
                          <h6 class="pricing-title">
                            {liqudity?.tokenA}{" "}
                            <span>
                              {liqudity?.network == "80001"
                                ? "Mumnai"
                                : liqudity?.network == "157"
                                ? "Polygon"
                                : liqudity?.network == "1"
                                ? "Ethereum"
                                : liqudity?.network == "5"
                                ? "Georila"
                                : liqudity?.network == "11155111"
                                ? `Sepolia`
                                : "Woox"}
                            </span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div class="currency-details-item">
                          <div class="value">{liqudity?.tokenB}</div>
                        </div>
                      </td>
                      <td>
                        <div class="currency-details-item">
                          <div
                            onClick={() =>
                              navigator.clipboard.writeText(
                                liqudity?.tokenA_Address
                              )
                            }
                            class="value c-primary"
                          >
                            {shortenAddress(liqudity?.tokenA_Address)}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="currency-details-item">
                          <div
                            onClick={() =>
                              navigator.clipboard.writeText(
                                liqudity?.tokenB_Address
                              )
                            }
                            class={`value ${
                              index % 2 === 0 ? "c-green-succes" : "c-red-light"
                            }  `}
                          >
                            {" "}
                            {shortenAddress(liqudity?.tokenB_Address)}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="currency-details-item">
                          <div
                            class="value"
                            onClick={() =>
                              navigator.clipboard.writeText(
                                liqudity?.poolAddress
                              )
                            }
                          >
                            {" "}
                            {shortenAddress(liqudity?.poolAddress)}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="currency-details-item">
                          <div class="value">
                            {" "}
                            {new Date(
                              liqudity?.timeCreated * 1000
                            ).toDateString()}{" "}
                          </div>
                        </div>
                      </td>
                      <td>
                        <a
                          href={
                            liqudity?.network == "80001"
                              ? `https://mumbai.polygonscan.com/tx/${liqudity.transactionHash}`
                              : liqudity?.network == "157"
                              ? `https://polygonscan.com/tx/${liqudity.transactionHash}`
                              : liqudity?.network == "1"
                              ? `https://etherscan.io/tx/${liqudity.transactionHash}`
                              : liqudity?.network == "5"
                              ? `https://goerli.etherscan.io/tx/${liqudity.transactionHash}`
                              : liqudity?.network == "11155111"
                              ? `https://sepolia.etherscan.io/tx/${liqudity.transactionHash}`
                              : `https://mumbai.polygonscan.com/tx/${liqudity.transactionHash}`
                          }
                          target="_blank"
                          class="btn btn--small btn--green-light"
                        >
                          Hash
                        </a>
                      </td>
                    </tr>
                  ))}
                  {/* <tr class="crumina-module crumina-pricing-table pricing-table--style-table-blurring c-brown">
                    <td>1</td>
                    <td>
                      <div class="pricing-thumb">
                        <img
                          src="img/if_Bitcoin_2745023.png"
                          class="woox-icon"
                          alt="bitcoin"
                        />
                        <h6 class="pricing-title">
                          Bitcoin <span>BTC</span>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">$171.559.166.785</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-primary">$10.163.30</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-green-succes">+ 25.94%</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">16.880.262 BTC</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="payment-method">
                          <img
                            src="img/paypal.png"
                            class="woox-icon"
                            alt="paypal"
                          />
                          <img
                            src="img/mastercard.png"
                            class="woox-icon"
                            alt="mastercard"
                          />
                          <img
                            src="img/visa.png"
                            class="woox-icon"
                            alt="visa"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#" class="btn btn--small btn--green-light">
                        Buy Now
                      </a>
                    </td>
                  </tr>
                  <tr class="crumina-module crumina-pricing-table pricing-table--style-table-blurring c-blue">
                    <td>2</td>
                    <td>
                      <div class="pricing-thumb">
                        <img
                          src="img/if_etherium_eth_ethcoin_crypto_2844386.png"
                          class="woox-icon"
                          alt="bitcoin"
                        />
                        <h6 class="pricing-title">
                          Ethereum <span>ETH</span>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">$80.266.577.723</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-primary">$857.17</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-red-light">- 4.22%</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">97.790.573 ETH</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="payment-method">
                          <img
                            src="img/paypal.png"
                            class="woox-icon"
                            alt="paypal"
                          />
                          <img
                            src="img/mastercard.png"
                            class="woox-icon"
                            alt="mastercard"
                          />
                          <img
                            src="img/visa.png"
                            class="woox-icon"
                            alt="visa"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#" class="btn btn--small btn--green-light">
                        Buy Now
                      </a>
                    </td>
                  </tr>
                  <tr class="crumina-module crumina-pricing-table pricing-table--style-table-blurring c-blue-light">
                    <td>3</td>
                    <td>
                      <div class="pricing-thumb">
                        <img
                          src="img/if_dash_dashcoin_2844383.png"
                          class="woox-icon"
                          alt="bitcoin"
                        />
                        <h6 class="pricing-title">
                          Dash <span>DASH</span>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">$4.964.598.370</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-primary">$641.33</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-green-succes">+ 3.86%</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">7.901.482 DASH</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="payment-method">
                          <img
                            src="img/paypal.png"
                            class="woox-icon"
                            alt="paypal"
                          />
                          <img
                            src="img/mastercard.png"
                            class="woox-icon"
                            alt="mastercard"
                          />
                          <img
                            src="img/visa.png"
                            class="woox-icon"
                            alt="visa"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#" class="btn btn--small btn--green-light">
                        Buy Now
                      </a>
                    </td>
                  </tr>
                  <tr class="crumina-module crumina-pricing-table pricing-table--style-table-blurring c-border-color">
                    <td>4</td>
                    <td>
                      <div class="pricing-thumb">
                        <img
                          src="img/if_litecion_ltc_lite_coin_crypto_2844390.png"
                          class="woox-icon"
                          alt="bitcoin"
                        />
                        <h6 class="pricing-title">
                          Litecoin <span>LTC</span>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">$11.868.672.826</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-primary">$214.45</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-red-light">- 0.58%</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">55.345.483 LTC</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="payment-method">
                          <img
                            src="img/paypal.png"
                            class="woox-icon"
                            alt="paypal"
                          />
                          <img
                            src="img/mastercard.png"
                            class="woox-icon"
                            alt="mastercard"
                          />
                          <img
                            src="img/visa.png"
                            class="woox-icon"
                            alt="visa"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#" class="btn btn--small btn--green-light">
                        Buy Now
                      </a>
                    </td>
                  </tr>
                  <tr class="crumina-module crumina-pricing-table pricing-table--style-table-blurring c-blue-lighter">
                    <td>5</td>
                    <td>
                      <div class="pricing-thumb">
                        <img
                          src="img/if_ripple_xrp_coin_2844396.png"
                          class="woox-icon"
                          alt="bitcoin"
                        />
                        <h6 class="pricing-title">
                          Ripple <span>XRP</span>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">$40.076.472.675</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-primary">$1.03</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-green-succes">+ 22.04%</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">39.094.802.192 XRP</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="payment-method">
                          <img
                            src="img/paypal.png"
                            class="woox-icon"
                            alt="paypal"
                          />
                          <img
                            src="img/mastercard.png"
                            class="woox-icon"
                            alt="mastercard"
                          />
                          <img
                            src="img/visa.png"
                            class="woox-icon"
                            alt="visa"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#" class="btn btn--small btn--green-light">
                        Buy Now
                      </a>
                    </td>
                  </tr>
                  <tr class="crumina-module crumina-pricing-table pricing-table--style-table-blurring c-blue-lighter">
                    <td>6</td>
                    <td>
                      <div class="pricing-thumb">
                        <img
                          src="img/logo-primary.png"
                          class="woox-icon"
                          alt="woox"
                        />
                        <h6 class="pricing-title">
                          Woox <span>WOOX</span>
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">$672.826</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-primary">$0.09</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value c-red-light">- 1.3%</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="value">485.678 WOOX</div>
                      </div>
                    </td>
                    <td>
                      <div class="currency-details-item">
                        <div class="payment-method">
                          <img
                            src="img/paypal.png"
                            class="woox-icon"
                            alt="paypal"
                          />
                          <img
                            src="img/mastercard.png"
                            class="woox-icon"
                            alt="mastercard"
                          />
                          <img
                            src="img/visa.png"
                            class="woox-icon"
                            alt="visa"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#" class="btn btn--small btn--green-light">
                        Buy Now
                      </a>
                    </td>
                  </tr> */}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="8">
                      NOTE! Ullamcorper sit amet risus nullam. Ac ut consequat
                      semper viverra. Tristique senectus et netus et malesuada
                      fames ac turpis.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidityHistory;
