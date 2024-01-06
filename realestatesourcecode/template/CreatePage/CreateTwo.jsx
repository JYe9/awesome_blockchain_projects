import React from "react";

const CreateTwo = () => {
  return (
    <div class="creat-collection-area pt--80">
      <div class="container">
        <div class="row g-5 ">
          <div class="col-lg-3 offset-1 ml_md--0 ml_sm--0">
            <div class="collection-single-wized banner">
              <label class="title required">Logo image</label>

              <div class="create-collection-input logo-image">
                <div class="logo-c-image logo">
                  <img
                    id="rbtinput1"
                    src="/profile/profile-01.jpg"
                    alt="Profile-NFT"
                  />
                  <label for="fatima" title="No File Choosen">
                    <span class="text-center color-white">
                      <i class="feather-edit"></i>
                    </span>
                  </label>
                </div>
                <div class="button-area">
                  <div class="brows-file-wrapper">
                    <input name="fatima" id="fatima" type="file" />
                  </div>
                </div>
              </div>
            </div>

            <div class="collection-single-wized banner">
              <label class="title">Cover Image</label>
              <div class="create-collection-input feature-image">
                <div class="logo-c-image feature">
                  <img
                    id="rbtinput2"
                    src="/profile/cover-04.png"
                    alt="Profile-NFT"
                  />
                  <label for="nipa" title="No File Choosen">
                    <span class="text-center color-white">
                      <i class="feather-edit"></i>
                    </span>
                  </label>
                </div>
                <div class="button-area">
                  <div class="brows-file-wrapper">
                    <input name="nipa" id="nipa" type="file" />
                  </div>
                </div>
              </div>
            </div>

            <div class="collection-single-wized banner">
              <label class="title">Featured image</label>
              <div class="create-collection-input feature-image">
                <div class="logo-c-image feature">
                  <img
                    id="createfileImage"
                    src="/profile/cover-03.jpg"
                    alt="Profile-NFT"
                  />
                  <label for="createinputfile" title="No File Choosen">
                    <span class="text-center color-white">
                      <i class="feather-edit"></i>
                    </span>
                  </label>
                </div>
                <div class="button-area">
                  <div class="brows-file-wrapper">
                    <input
                      name="createinputfile"
                      id="createinputfile"
                      type="file"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="create-collection-form-wrapper">
              <div class="row">
                <div class="col-lg-6">
                  <div class="collection-single-wized">
                    <label for="name" class="title required">
                      Name
                    </label>
                    <div class="create-collection-input">
                      <input id="name" class="name" type="text" required />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="collection-single-wized">
                    <label for="url" class="title">
                      URL
                    </label>
                    <div class="create-collection-input">
                      <input id="url" class="url" type="text" required />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="collection-single-wized">
                    <label class="title">Category</label>
                    <div class="create-collection-input">
                      <div class="nice-select mb--30" tabindex="0">
                        <span class="current">Add Category</span>
                        <ul class="list">
                          <li
                            data-value="Art"
                            data-display="Art"
                            class="option selected focus"
                          >
                            Art
                          </li>
                          <li data-value="1" class="option">
                            Collectibles
                          </li>
                          <li data-value="2" class="option">
                            Music
                          </li>
                          <li data-value="4" class="option">
                            Sports
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="collection-single-wized">
                    <label for="description" class="title">
                      Description
                    </label>
                    <div class="create-collection-input">
                      <textarea id="description" class="text-area"></textarea>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="collection-single-wized">
                    <label for="earning" class="title">
                      Creator Earnings
                    </label>
                    <div class="create-collection-input">
                      <input id="earning" class="url" type="text" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="collection-single-wized">
                    <label for="wallet" class="title">
                      Your payout wallet address
                    </label>
                    <div class="create-collection-input">
                      <input id="wallet" class="url" type="text" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="nuron-information mb--30">
                    <div class="single-notice-setting">
                      <div class="input">
                        <input
                          type="checkbox"
                          id="themeSwitch"
                          name="theme-switch"
                          class="theme-switch__input"
                        />
                        <label for="themeSwitch" class="theme-switch__label">
                          <span></span>
                        </label>
                      </div>
                      <div class="content-text">
                        <p>Explicit & sensitive content</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="button-wrapper">
                    <a
                      href="#"
                      class="btn btn-primary btn-large mr--30"
                      data-bs-toggle="modal"
                      data-bs-target="#collectionModal"
                    >
                      Preview
                    </a>
                    <a href="#" class="btn btn-primary-alta btn-large">
                      Create
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTwo;
