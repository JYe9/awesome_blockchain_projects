import React from "react";

const Banner = () => {
  return (
    <div class="banner-three slider-style-3 pt--70">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-5">
            <div class="wrapper">
              <div class="slider ">
                <div class="slider-thumbnail thumbnail-overlay">
                  <a href="product-details.html">
                    <img
                      class="w-100"
                      src="/banner/h-three-banner-01.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                  <div class="read-wrapper">
                    <h5>
                      <a href="product-details.html">HasLivbe</a>
                    </h5>
                    <span>Md. Master</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="row g-4">
              {[1, 2, 3, 4, 5, 6].map((el, i) => (
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div class="slide-small-wrapper">
                    <div class="thumbnail thumbnail-overlay">
                      <a href="product-details.html">
                        <img
                          class="w-100"
                          src="/banner/banner-sm-01.jpg"
                          alt="Nft_Profile"
                        />
                      </a>
                    </div>
                    <div class="read-wrapper">
                      <h5 class="title">
                        <a href="#">HasLivbe</a>
                      </h5>
                      <span>Md. Master</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
