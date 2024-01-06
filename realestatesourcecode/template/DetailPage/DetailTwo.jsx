import React from "react";

const DetailTwo = () => {
  return (
    <div class="product-details-area rn-section-gapTop">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="product-tab-wrapper rbt-sticky-top-adjust">
              <div class="pd-tab-inner">
                <div
                  class="nav rn-pd-nav rn-pd-rt-content nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <span class="rn-pd-sm-thumbnail">
                      <img
                        src="/portfolio/portfolio-01.jpg"
                        alt="Nft_Profile"
                      />
                    </span>
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span class="rn-pd-sm-thumbnail">
                      <img
                        src="/portfolio/portfolio-02.jpg"
                        alt="Nft_Profile"
                      />
                    </span>
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <span class="rn-pd-sm-thumbnail">
                      <img
                        src="/portfolio/portfolio-03.jpg"
                        alt="Nft_Profile"
                      />
                    </span>
                  </button>
                </div>

                <div class="tab-content rn-pd-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div class="rn-pd-thumbnail">
                      <img
                        src="/portfolio/portfolio-01.jpg"
                        alt="Nft_Profile"
                      />
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div class="rn-pd-thumbnail">
                      <img
                        src="/portfolio/portfolio-02.jpg"
                        alt="Nft_Profile"
                      />
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div class="rn-pd-thumbnail">
                      <img
                        src="/portfolio/portfolio-03.jpg"
                        alt="Nft_Profile"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
            <div class="rn-pd-content-area">
              <div class="pd-title-area">
                <h4 class="title">The Amazing Game</h4>
                <div class="pd-react-area">
                  <div class="heart-count">
                    <span>33</span>
                  </div>
                  <div class="count">
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span class="bid">
                Height bid <span class="price">0.11wETH</span>
              </span>
              <h6 class="title-name">#22 Portal , Info bellow</h6>
              <div class="catagory-collection">
                <div class="catagory">
                  <span>
                    Catagory <span class="color-body">10% royalties</span>
                  </span>
                  <div class="top-seller-inner-one">
                    <div class="top-seller-wrapper">
                      <div class="thumbnail">
                        <a href="#">
                          <img src="/client/client-1.png" alt="Nft_Profile" />
                        </a>
                      </div>
                      <div class="top-seller-content">
                        <a href="#">
                          <h6 class="name">Brodband</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="collection">
                  <span>Collections</span>
                  <div class="top-seller-inner-one">
                    <div class="top-seller-wrapper">
                      <div class="thumbnail">
                        <a href="#">
                          <img src="/client/client-2.png" alt="Nft_Profile" />
                        </a>
                      </div>
                      <div class="top-seller-content">
                        <a href="#">
                          <h6 class="name">Brodband</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="btn btn-primary-alta" href="#">
                Unlockable content included
              </a>
              <div class="rn-bid-details">
                <div class="tab-wrapper-one">
                  <nav class="tab-button-one">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        class="nav-link"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="false"
                      >
                        Bids
                      </button>
                      <button
                        class="nav-link active"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="true"
                      >
                        Details
                      </button>
                      <button
                        class="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        History
                      </button>
                    </div>
                  </nav>
                  <div class="tab-content rn-bid-content" id="nav-tabContent">
                    <div
                      class="tab-pane fade"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-3.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.11wETH by <a href="#">Allen Waltker</a>
                            </span>
                            <span class="count-number">1 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-4.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.09wETH by <a href="#">Joe Biden</a>
                            </span>
                            <span class="count-number">1.30 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-5.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.07wETH by <a href="#">Sonial mridha</a>
                            </span>
                            <span class="count-number">1.35 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-6.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.07wETH by <a href="#">Tribute Dhusra</a>
                            </span>
                            <span class="count-number">1.55 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-7.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.07wETH by <a href="#">Sonia Sobnom</a>
                            </span>
                            <span class="count-number">2 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-8.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.02wETH by <a href="#">Sadia Rummon</a>
                            </span>
                            <span class="count-number">2.5 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade show active"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div class="rn-pd-bd-wrapper">
                        <div class="top-seller-inner-one">
                          <h6 class="name-title">Owner</h6>
                          <div class="top-seller-wrapper">
                            <div class="thumbnail">
                              <a href="#">
                                <img
                                  src="/client/client-1.png"
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div class="top-seller-content">
                              <a href="#">
                                <h6 class="name">Brodband</h6>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="rn-pd-sm-property-wrapper">
                          <h6 class="pd-property-title">Property</h6>
                          <div class="property-wrapper">
                            <div class="pd-property-inner">
                              <span class="color-body type">HYPE TYPE</span>
                              <span class="color-white value">
                                CALM AF (STILL)
                              </span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">BASTARDNESS</span>
                              <span class="color-white value">
                                C00LIO BASTARD
                              </span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">TYPE</span>
                              <span class="color-white value">APE</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">ASTARDNESS</span>
                              <span class="color-white value">BASTARD</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">BAD HABIT(S)</span>
                              <span class="color-white value">PIPE</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">BID</span>
                              <span class="color-white value">BPEYti</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">ASTRAGENAKAR</span>
                              <span class="color-white value">BASTARD</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">CITY</span>
                              <span class="color-white value">TOKYO</span>
                            </div>
                          </div>
                        </div>

                        <div class="rn-pd-sm-property-wrapper">
                          <h6 class="pd-property-title">Catagory</h6>
                          <div class="catagory-wrapper">
                            <div class="pd-property-inner">
                              <span class="color-body type">ZARY</span>
                              <span class="color-white value">APP</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">SOMALIAN</span>
                              <span class="color-white value">TRIBUTE</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">TUNA</span>
                              <span class="color-white value">PIPE</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">BID</span>
                              <span class="color-white value">BPEYti</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">ASTRAGENAKAR</span>
                              <span class="color-white value">BASTARD</span>
                            </div>

                            <div class="pd-property-inner">
                              <span class="color-body type">CITY</span>
                              <span class="color-white value">TOKYO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-3.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.11wETH by<a href="#">Allen Waltker</a>
                            </span>
                            <span class="count-number">1 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one mt--20">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-2.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.11wETH by<a href="#">Allen Waltker</a>
                            </span>
                            <span class="count-number">1 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one mt--20">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-4.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.11wETH by<a href="#">Allen Waltker</a>
                            </span>
                            <span class="count-number">1 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one mt--20">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-5.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.11wETH by<a href="#">Allen Waltker</a>
                            </span>
                            <span class="count-number">1 hours ago</span>
                          </div>
                        </div>
                      </div>

                      <div class="top-seller-inner-one mt--20">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-8.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span>
                              0.11wETH by<a href="#">Allen Waltker</a>
                            </span>
                            <span class="count-number">1 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="place-bet-area">
                  <div class="rn-bet-create">
                    <div class="bid-list winning-bid">
                      <h6 class="title">Winning bit</h6>
                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#">
                              <img
                                src="/client/client-7.png"
                                alt="Nft_Profile"
                              />
                            </a>
                          </div>
                          <div class="top-seller-content">
                            <span class="heighest-bid">
                              Heighest bid <a href="#">Atif aslam</a>
                            </span>
                            <span class="count-number">0.115wETH</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bid-list left-bid">
                      <h6 class="title">Auction has ended</h6>
                      <div class=" mt--15" data-date="2025-12-09">
                        <div class="countdown-container days">
                          <span class="countdown-value">87</span>
                          <span class="countdown-heading">D's</span>
                        </div>
                        <div class="countdown-container hours">
                          <span class="countdown-value">23</span>
                          <span class="countdown-heading">H's</span>
                        </div>
                        <div class="countdown-container minutes">
                          <span class="countdown-value">38</span>
                          <span class="countdown-heading">Min's</span>
                        </div>
                        <div class="countdown-container seconds">
                          <span class="countdown-value">27</span>
                          <span class="countdown-heading">Sec</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary-alta mt--30"
                    data-bs-toggle="modal"
                    data-bs-target="#placebidModal"
                  >
                    Place a Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTwo;
