import React from "react";

const App = () => {
  return (
    <section class="medium-padding120 responsive-align-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <header class="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div class="heading-sup-title">Top-5 cryptocurrencies</div>
              <h2 class="heading-title weight-normal">
                Statistics of currencies on
                <span class="weight-bold">all your devices</span>
              </h2>
              <div class="heading-text">
                Investigationes demonstraverunt lectores legere elementum
                pulvinar etiam non quam lacus suspendisse risus nec feugiat in
                fermentum laoreet sit amet cursus quam adipiscing vitae proin
                sagittis.
              </div>
            </header>

            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynamicus, qui
              sequitur mutationem consuetudium lectorum. Mirum est notare quam
              littera gothica, quam nunc putamus parum claram, anteposuerit
              litterarum formas humanitatis per laoreet sit amet cursus seacula
              qui mutationem consuetudium claritas est etiam processus
              dynamicus.
            </p>

            <div class="btn-market-wrap mt60">
              <a
                href="#"
                class="btn btn--market btn--apple btn--with-icon btn--icon-left"
              >
                <svg class="woox-icon icon-apple">
                  <use xlinkHref="#icon-apple"></use>
                </svg>
                <div class="text">
                  <span class="sup-title">download on</span>
                  <span class="title">Apple Store</span>
                </div>
              </a>

              <a
                href="#"
                class="btn btn--market btn--google btn--with-icon btn--icon-left"
              >
                <svg class="woox-icon icon-if-59-play-843782">
                  <use xlinkHref="#icon-if-59-play-843782"></use>
                </svg>
                <div class="text">
                  <span class="sup-title">download on</span>
                  <span class="title">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt30">
            <img class="responsive-width-50" src="img/phone.png" alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
