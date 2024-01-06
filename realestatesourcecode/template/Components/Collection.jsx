import React from "react";

const Collection = () => {
  return (
    <div class="rn-collection-area rn-section-gapTop">
      <div class="container">
        <div class="row mb--50 align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <h3
              class="title mb--0"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Top Collection
            </h3>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div
              class="view-more-btn text-start text-sm-end"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <a class="btn-transparent" href="#">
                VIEW ALL
              </a>
            </div>
          </div>
        </div>

        <div class="row g-5">
          {[1, 2, 3, 4].map((el, i) => (
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
            >
              <a href="product-details.html" class="rn-collection-inner-one">
                <div class="collection-wrapper">
                  <div class="collection-big-thumbnail">
                    <img
                      src="/collection/collection-lg-01.jpg"
                      alt="Nft_Profile"
                    />
                  </div>
                  <div class="collenction-small-thumbnail">
                    <img
                      src="/collection/collection-sm-01.jpg"
                      alt="Nft_Profile"
                    />
                    <img
                      src="/collection/collection-sm-02.jpg"
                      alt="Nft_Profile"
                    />
                    <img
                      src="/collection/collection-sm-03.jpg"
                      alt="Nft_Profile"
                    />
                  </div>
                  <div class="collection-profile">
                    <img src="/client/client-15.png" alt="Nft_Profile" />
                  </div>
                  <div class="collection-deg">
                    <h6 class="title">Cubic Trad</h6>
                    <span class="items">27 Items</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
