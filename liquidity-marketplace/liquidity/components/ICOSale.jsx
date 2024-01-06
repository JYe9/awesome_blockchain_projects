import React, { useState } from "react";

//INTERNAL IMPORT
import { Input } from "./index";

const ICOSale = ({ tokenSale, nativeToken, buyToken }) => {
  const [tokenQuantity, setTokenQuantity] = useState();

  const percentage =
    `${tokenSale?.tokenSold / tokenSale?.tokenSaleBalance}` * 100;
  return (
    <section id="tokenBuy" class="medium-padding120 responsive-align-center">
      <div class="container" id="buyWoox">
        <div class="row bg-2">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
            <header class="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <img class="primary-dots mb30" src="img/dots.png" alt="dots" />
              <h2 class="heading-title weight-normal">
                Hurry to invest
                <span class="weight-bold">in cryptocurrency</span>
              </h2>
              <div class="heading-text">
                Investigationes demonstraverunt lectores legere elementum
                pulvinar etiam non quam lacus suspendisse.
              </div>
            </header>
            <p>
              Mirum est notare quam littera gothica, quam nunc putamus parum
              claram, anteposuerit litterarum formas humanitatis per laoreet sit
              amet cursus seacula qui mutationem consuetudium claritas est etiam
              processus dynamicus.
            </p>
            <div class="crumina-module crumina-counter-item counter--icon-left mt60">
              <svg class="woox-icon">
                <use xlinkHref="#icon-group"></use>
              </svg>
              <div class="counter-content">
                <div class="counter-numbers counter">
                  <span>{nativeToken?.tokenTotalSupply}</span>
                  <div class="units">+</div>
                </div>
                <h4 class="counter-title">{nativeToken?.tokenSymbol}</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-lg-offset-0 col-sm-12 col-xs-12">
            <div class="widget w-distribution-ends countdown-bg1">
              <h5 class="title">Woox token for Sale</h5>

              <div class="new_center_img mt30">
                <img
                  class="responsive-width-50"
                  src="img/nopool.png"
                  alt="phone"
                />
              </div>
              <Input
                placeholder={"token Quantity"}
                handleClick={(e) => setTokenQuantity(e.target.value)}
              />

              <a
                onClick={() => buyToken(tokenQuantity)}
                class="btn btn--large btn--green-light"
              >
                Buy Woox Tokens
              </a>

              <div class="crumina-module crumina-skills-item skills-item--bordered">
                <div class="skills-item-info">
                  <span class="skills-item-title">
                    {tokenSale?.tokenSold}
                    <span class="skills-item-count c-primary">
                      <span class="count-animate"></span>
                      <span class="units">
                        Balance: {nativeToken?.tokenBalance}
                      </span>
                    </span>
                  </span>
                </div>
                <div class="skills-item-meter">
                  <span
                    class="skills-item-meter-active bg-primary-color"
                    style={{ width: `${percentage}%` }}
                  ></span>
                </div>
                <span class="add-info">
                  <span>
                    <span class="c-link-color">Market Cap:</span>{" "}
                    {tokenSale?.tokenPrice * tokenSale?.tokenSaleBalance}
                  </span>
                  <span class="c-link-color">Matic</span>
                </span>
              </div>

              <div class="price-wrap">
                <div class="token-price">
                  Token Price:
                  <div class="price-value">{tokenSale?.tokenPrice} Matic</div>
                </div>
                <div class="token-total">
                  Total {nativeToken?.tokenSymbol} Tokens:
                  <div class="price-value">{tokenSale?.tokenSaleBalance} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICOSale;
