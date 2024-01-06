import React from "react";

import { HeaderICON } from "./index";
import { shortenAddress } from "../Utils/index";

const Header = ({ setOpenAddPool, setOpenAllLiquidity, connect, address }) => {
  return (
    <header class="header" id="site-header">
      <div class="container">
        <div class="header-content-wrapper">
          <a href="index.html" class="site-logo">
            <img src="img/logo-primary.png" alt="Woox" />
            <HeaderICON />
          </a>

          <nav id="primary-menu" class="primary-menu">
            <ul class="primary-menu-menu">
              <li>
                <a href="/">Home</a>
              </li>

              <li
                onClick={() => setOpenAddPool(true)}
                class="menu-item-has-children"
              >
                <a>Add Pool</a>
              </li>

              <li
                onClick={() => setOpenAllLiquidity(true)}
                class="menu-item-has-children"
              >
                <a>Add Liquidity</a>
              </li>

              <li class="menu-item-has-children">
                <a>Coin Market</a>
              </li>

              <li class="">
                <a href="#tokenBuy">Buy Woox Token</a>
              </li>

              {address ? (
                <a
                  onClick={() => navigator.clipboard.writeText(address)}
                  class="btn btn--large btn--primary btn--transparent"
                >
                  {shortenAddress(address)}
                </a>
              ) : (
                <a
                  onClick={() => connect()}
                  class="btn btn--large btn--primary btn--transparent"
                >
                  Connect
                </a>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
