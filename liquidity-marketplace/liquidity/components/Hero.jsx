import React from "react";

const Hero = ({ transferNativeToken }) => {
  return (
    <section
      data-settings="particles-1"
      class="main-section crumina-flying-balls particles-js bg-1"
    >
      <div class="container">
        <div class="row medium-padding120 align-center">
          <div class="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
            <header class="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div class="heading-sup-title">Coin Market</div>
              <h2 class="heading-title heading--half-colored">
                Create Liquidity Marketplace
              </h2>
              <div class="heading-text">
                Investigationes demonstraverunt lectores legere elementum
                pulvinar etiam non quam lacus suspendisse risus nec feugiat in
                laoreet sit amet cursus.
              </div>
            </header>
            <a
              onClick={() => transferNativeToken()}
              // href="#buyWoox"
              class="btn btn--large btn--primary btn--transparent"
            >
              Get Woox Token Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
