import React from "react";

//INTERNAL IMPORT
import Tick from "../SVG/Tick";

const Modal = () => {
  const setActiveState = () => {
    const changeState = false;
    const store = JSON.stringify(changeState);
    const data = localStorage.setItem("active", store);
    console.log(data);
    window.location.reload();
  };
  return (
    <div>
      <div class="modal">
        <div class="form">
          <div class="banner"></div>
          <label class="title">Uniswap Crypti Swap</label>
          <p class="description">
            Welcome to Uniswap Crypti Swap a decentralized exchange, provide
            buying, selling, liqudity and earning reward.
          </p>

          <div class="benefits">
            <span>What we offer</span>
            <ul>
              <li>
                <Tick />
                <span>Grow your project with biggest user base</span>
              </li>
              <li>
                <Tick />
                <span>
                  Provide liquidity to your project to sell in any exchange
                </span>
              </li>
            </ul>
          </div>

          <div class="modal--footer">
            <label class="price">
              <img className="uniswap-logo" src="uniswap.png" alt="" />
            </label>
            <button onClick={() => setActiveState()} class="upgrade-btn">
              Start Crypti Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
