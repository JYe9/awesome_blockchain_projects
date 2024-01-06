import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Hero = ({
  setLoader,
  LOAD_TOKEN,
  token_1,
  token_2,
  setOpenToken,
  setToken_1,
  setToken_2,
  setInputAmount,
  swap,
}) => {
  //RESET
  const reset = () => {
    setToken_1();
    setToken_2();
  };
  return (
    <div
      class="banner"
      id="home"
      style={{ backgroundImage: `url("assets/img/banner-bg.png")` }}
    >
      <div class="illustration">
        <img src="assets/img/banner-bg-1.png" alt="" class="one" />
        <img src="assets/img/banner-bg-2.png" alt="" class="two" />
        <img src="assets/img/banner-map.png" alt="" class="three" />
      </div>

      <div class="hero-area">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-7 col-lg-6">
              <div
                class="banner-content wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <h3 class="subtitle">Fast and Convenient</h3>
                <h1 class="head">Cryptocurrency Exchange</h1>
                <p class="text">
                  We are trusted by more than 140 thousands of people from 45
                  countries worldwide.
                </p>
              </div>
            </div>
            <div
              class="col-xl-4 col-lg-6 wow fadeInRightBig"
              data-wow-delay="0.3s"
              data-wow-duration="0.5s"
            >
              <div class="exchange">
                <h5 class="ex-head">Cryptocurrency Exchange</h5>
                <div class="exchange-box">
                  <div class="selector">
                    <p class="text">You Change</p>
                    <div class="coin">
                      <span>{token_1?.symbol}</span>
                    </div>
                  </div>
                  <div>
                    <div class="form-group">
                      <span onClick={() => setOpenToken(true)}>open</span>
                      <input
                        type="text"
                        placeholder={token_1?.symbol || "Select"}
                        class="form-control"
                        onChange={(e) => setInputAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  {token_1 ? (
                    <span class="rate">{`Balance: ${token_1?.balance.slice(
                      0,
                      10
                    )} ${token_1?.symbol}`}</span>
                  ) : (
                    ""
                  )}
                </div>

                <a class="rotate">
                  <img
                    onClick={() => reset()}
                    src="./assets/img/exchange-img.png"
                    alt=""
                  />
                </a>

                <div class="exchange-box">
                  <div class="selector">
                    <p class="text">You Get</p>
                    <div class="coin">
                      <span>{token_2?.symbol}</span>
                    </div>
                  </div>
                  <div>
                    <div class="form-group">
                      <span onClick={() => setOpenToken(true)}>open</span>
                      <input
                        type="text"
                        placeholder={token_2?.symbol || "Select"}
                        class="form-control"
                        onClick={() => setOpenToken(true)}
                      />
                    </div>
                  </div>
                  {token_2 ? (
                    <span class="rate">{`Balance: ${token_2?.balance.slice(
                      0,
                      10
                    )} ${token_2?.symbol}`}</span>
                  ) : (
                    ""
                  )}
                </div>

                <a onClick={() => swap()} class="button button-1">
                  Exchange
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
